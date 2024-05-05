import React, { useEffect, useState } from "react";

// Import fetchData function
import fetchData from "./fetchData";

// Import JobCard component
import JobCard from "./JobCard";

// Import CSS file for styling
import "./JobResults.css";

// Import Loader component
import Loader from "./Loader";

// Component for displaying job listings
export default function JobListings() {
  // State variables for data, page number, loading state, and error
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data when component mounts or page changes
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetchData(page);
        setData((prev) => [...prev, ...response.jdList]); // Accessing jdList property
        // console.log("from jobLis", response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getData();
  }, [page]);

  // Handle scroll event
  const handleScroll = () => {
    //console.log("reached bottom");
    if (
      !loading &&
      !error &&
      document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  // Debounce scroll event
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedHandleScroll = debounce(handleScroll, 200); // Adjust the delay as needed

  // Add scroll event listener when component mounts and remove it when unmounts
  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [debouncedHandleScroll]);

  return (
    // Container for job listings
    <div className="job-listings-container">
      {/* Render job listings if data is available, otherwise display a message */}
      {data.length > 0 ? (
        data.map((job) => (
          <div
            key={job.jdUid + Math.random(0, 100)}
            className="job-card-wrapper"
          >
            <JobCard job={job} />
          </div>
        ))
      ) : (
        <div className="no-job-listings">No job listings available</div>
      )}
      {/* Display loader while loading data */}
      {loading && <Loader />}
      {/* Display error message if data fetching fails */}
      {error && <div>Error fetching data: {error.message}</div>}
    </div>
  );
}
