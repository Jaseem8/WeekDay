import React, { useState } from "react";

// Importing Material-UI components and styles
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

// Importing data from filterData.js
import {
  rolesData,
  experienceData,
  employeesData,
  baseSalaryData,
  remoteOptionsData,
  techStackData,
} from "./filterData";

// Importing FilterModule component and CSS styles
import FilterModule from "./FilterModule";
import "./Filter.css";

// Main component for filtering
const FilterComponent = () => {
  // Using Material-UI theme

  // States for different filter criteria
  const [selectedRole, setSelectedRole] = useState(rolesData);
  const [selectedExperience, setSelectedExperience] = useState(experienceData);
  const [selectedEmployees, setSelectedEmployees] = useState(employeesData);
  const [selectedBaseSalary, setSelectedBaseSalary] = useState(baseSalaryData);
  const [selectedRemoteOption, setSelectedRemoteOption] =
    useState(remoteOptionsData);
  const [selectedTech, setSelectedTech] = useState(techStackData);

  // State for storing company name input
  const [companyName, setCompanyName] = useState("");

  return (
    // Container for all filter modules
    <div className="overall-filter-wrapper">
      {/* Filter module for Roles */}
      <FilterModule
        state={selectedRole}
        setState={setSelectedRole}
        title={"Roles"}
      />
      {/* Filter module for Number of Employees */}
      <FilterModule
        state={selectedEmployees}
        setState={setSelectedEmployees}
        title={"Number of Employees"}
      />
      {/* Filter module for Experience */}
      <FilterModule
        state={selectedExperience}
        setState={setSelectedExperience}
        title={"Experience"}
      />
      {/* Filter module for Remote */}
      <FilterModule
        state={selectedRemoteOption}
        setState={setSelectedRemoteOption}
        title={"Remote"}
      />
      {/* Filter module for Tech Stack */}
      <FilterModule
        state={selectedTech}
        setState={setSelectedTech}
        title={"Tech Stack"}
      />
      {/* Filter module for Amount Of Base Salary */}
      <FilterModule
        state={selectedBaseSalary}
        setState={setSelectedBaseSalary}
        title={"Amount Of Base Salary"}
      />
      {/* Text field for Company Name input */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <TextField
          id="company-name"
          label="Company Name"
          variant="outlined"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />
      </FormControl>
    </div>
  );
};

export default FilterComponent;
