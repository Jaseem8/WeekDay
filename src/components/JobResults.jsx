import React, { useEffect, useState } from "react";
import fetchData from "./fetchData"; // Import your fetchData function
import JobCard from "./JobCard"; // Import your JobCard component
import "./JobResults.css"; // Import your CSS file for styling

export default function JobListings() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetchData(page);
        setData((prev) => [...prev, ...response.jdList]); // Accessing jdList property
        console.log("from jobLis", response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getData();
  }, [page]);

  const handleScroll = () => {
    console.log("reached bottom");
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

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  return (
    <div className="job-listings-container">
      {data.length > 0 ? ( // Conditional rendering for empty state
        data.map((job) => (
          <div
            key={job.jdUid + Math.random(0, 100)}
            className="job-card-wrapper"
          >
            <JobCard job={job} />
          </div>
        ))
      ) : (
        <div>No job listings available</div>
      )}
      {loading && <div>Loading...</div>}
      {error && <div>Error fetching data: {error.message}</div>}
    </div>
  );
}
