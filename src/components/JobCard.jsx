import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Button from "@mui/material/Button";
import "./JobCard.css"; // Import your CSS file for styling
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
export default function JobCard({ job }) {
  const {
    jdUid,
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
    <div className="job-card">
      <div className="posted">
        <HourglassBottomIcon className="icon" />
        <p className="paraPosted">Posted 16 days ago</p>
      </div>
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
      <div className="job-card-details-salary">
        Estimated Salary: {minJdSalary ? `${minJdSalary} - ` : ""}
        {maxJdSalary} {salaryCurrencyCode}
      </div>
      <div className="job-card-description">
        <p> About Company:</p>
        <p>About US</p>
        {jobDetailsFromCompany}
      </div>
      <Button
        className="job-card-apply-button"
        size="small"
        color="primary"
        href={jdLink}
        target="_blank"
      >
        View Job
      </Button>
      {minExp > 0 && <p className="exp1">Minimum Experience</p>}
      {minExp > 0 && <p className="exp2">{minExp}</p>}
      <button className="easy">⚡ Easy Apply</button>
    </div>
  );
}
