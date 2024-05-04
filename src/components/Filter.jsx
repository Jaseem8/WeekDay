import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

import { TextField } from "@mui/material";
import {
  rolesData,
  experienceData,
  employeesData,
  baseSalaryData,
  remoteOptionsData,
} from "./filterData"; // Importing data from filterData.js
import FilterModule from "./FilterModule";

const FilterComponent = () => {
  const theme = useTheme();
  const [selectedRole, setSelectedRole] = useState(rolesData);
  const [selectedExperience, setSelectedExperience] = useState(experienceData);
  const [selectedEmployees, setSelectedEmployees] = useState(employeesData);
  const [selectedBaseSalary, setSelectedBaseSalary] = useState(baseSalaryData);
  const [selectedRemoteOption, setSelectedRemoteOption] =
    useState(remoteOptionsData);
  const [companyName, setCompanyName] = useState("");

  return (
    <div>
      <FilterModule
        state={selectedRole}
        setState={setSelectedRole}
        title={"Roles"}
      />
      <FilterModule
        state={selectedExperience}
        setState={setSelectedExperience}
        title={"Experience"}
      />
      <FilterModule
        state={selectedEmployees}
        setState={setSelectedEmployees}
        title={"Number of Employees"}
      />
      <FilterModule
        state={selectedBaseSalary}
        setState={setSelectedBaseSalary}
        title={"Amount Of Base Salary"}
      />
      <FilterModule
        state={selectedRemoteOption}
        setState={setSelectedRemoteOption}
        title={"Remote"}
      />

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
