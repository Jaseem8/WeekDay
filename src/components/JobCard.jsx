import React from "react";
import Button from "@mui/material/Button";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

// Importing CSS file for styling
import "./JobCard.css";

// Component for displaying job cards
export default function JobCard({ job }) {
  // Destructuring job object
  const {
    jdLink,
    companyName,
    location,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    minExp,
    maxExp,
    jobRole,
    logoUrl,
  } = job;

  return (
    // Container for job card
    <div className="job-card">
      {/* Posted information */}
      <div className="posted">
        <HourglassBottomIcon className="icon" />
        <p className="paraPosted">Posted 16 days ago</p>
      </div>
      {/* Company, job role, location, and experience */}
      <div className="title-wrapper">
        <img
          className="job-card-media"
          component="img"
          src={logoUrl}
          alt={companyName}
        />
        <div className="titleContent-wrapper">
          <div className="job-card-title">{companyName}</div>
          <div className="job-card-details-role"> {jobRole} Developer</div>
          <div className="job-card-details-location"> {location}</div>
          <div className="job-card-details-experience">
            Experience: {minExp} - {maxExp} years
          </div>
        </div>
      </div>
      {/* Estimated salary */}
      <div className="job-card-details-salary">
        Estimated Salary: {minJdSalary ? `${minJdSalary} - ` : ""}
        {maxJdSalary} {salaryCurrencyCode}
      </div>
      {/* Company description */}
      <div className="job-card-description">
        <p> About Company:</p>
        <p>About US</p>
        {jobDetailsFromCompany}
      </div>
      {/* Button to view job details */}
      <Button
        className="job-card-apply-button"
        size="small"
        color="primary"
        href={jdLink}
        target="_blank"
      >
        View Job
      </Button>
      {/* Display minimum experience if greater than 0 */}
      {minExp > 0 && <p className="exp1">Minimum Experience</p>}
      {minExp > 0 && <p className="exp2">{minExp}</p>}
      {/* Easy Apply button */}
      <button className="easy">⚡ Easy Apply</button>
    </div>
  );
}
