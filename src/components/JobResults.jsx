import React, { useEffect, useState } from "react";
import fetchData from "./fetchData"; // Import your fetchData function
import JobCard from "./JobCard"; // Import your JobCard component
import "./JobListings.css"; // Import your CSS file for styling

export default function JobListings() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData(); // Use await when calling fetchData
        setData(response);
        console.log("from jobLis", response); // Log the response to verify
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []); // Run only once when component mounts

  return (
    <div className="job-listings-container">
      {data &&
        data.jdList.map((job) => (
          <div key={job.jdUid} className="job-card-wrapper">
            <JobCard job={job} />
          </div>
        ))}
    </div>
  );
}
