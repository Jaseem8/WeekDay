import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
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
    <Card className="job-card">
      <div className="posted">
        <HourglassBottomIcon className="icon" />
        <p classname="paraPosted">Posted 16 days ago</p>
      </div>
      <div classname="title-wrapper">
        <img
          className="job-card-media"
          component="img"
          src={logoUrl}
          alt={companyName}
        />
        <div classname="titleContent-wrapper">
          <Typography
            className="job-card-title"
            gutterBottom
            variant="h7"
            component="div"
          >
            {companyName}
          </Typography>
          <Typography
            className="job-card-details"
            variant="subtitle1"
            color="text.secondary"
          >
            Job Role: {jobRole}
          </Typography>
          <Typography
            className="job-card-details"
            variant="subtitle1"
            color="text.secondary"
          >
            Location: {location}
          </Typography>

          <Typography
            className="job-card-details"
            variant="subtitle1"
            color="text.secondary"
          >
            Experience: {minExp} - {maxExp} years
          </Typography>
        </div>
      </div>
      <Typography
        className="job-card-details"
        variant="subtitle1"
        color="text.secondary"
      >
        Salary: {minJdSalary ? `${minJdSalary} - ` : ""}
        {maxJdSalary} {salaryCurrencyCode}
      </Typography>
      <Typography
        className="job-card-description"
        variant="body2"
        color="text.secondary"
      >
        {jobDetailsFromCompany}
      </Typography>
      <Button
        className="job-card-apply-button"
        size="small"
        color="primary"
        href={jdLink}
        target="_blank"
      >
        Apply Now
      </Button>
      <Typography
        className="job-card-details"
        variant="body2"
        color="text.secondary"
      >
        Job ID: {jdUid}
      </Typography>
    </Card>
  );
}
