import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";
import { TextField } from "@mui/material";
import {
  rolesData,
  experienceData,
  employeesData,
  baseSalaryData,
  remoteOptionsData,
} from "./filterData"; // Importing data from filterData.js

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FilterComponent = ({ onFilter }) => {
  const theme = useTheme();
  const [selectedRole, setSelectedRole] = useState(rolesData);
  const [selectedExperience, setSelectedExperience] = useState(experienceData);
  const [selectedEmployees, setSelectedEmployees] = useState(employeesData);
  const [selectedBaseSalary, setSelectedBaseSalary] = useState(baseSalaryData);
  const [selectedRemoteOption, setSelectedRemoteOption] =
    useState(remoteOptionsData);
  const [companyName, setCompanyName] = useState("");

  const handleSelectToggle = (event, element) => {
    const selection = element.props.value; // selected item
    const array = event.target.value;
    console.log(selection);

    // Update the isSelected property of the selected role
    const updatedSelectedRoles = selectedRole.map((role) =>
      selection === role.value ? { ...role, isSelected: true } : role
    );

    setSelectedRole(updatedSelectedRoles);
  };

  const handleDelete = (value) => {
    setSelectedRole((prevSelected) =>
      prevSelected.map((role) =>
        role.value === value ? { ...role, isSelected: false } : role
      )
    );
  };

  const handleFilter = () => {
    onFilter({
      role: selectedRole,
      experience: selectedExperience,
      employees: selectedEmployees,
      baseSalary: selectedBaseSalary,
      remoteOption: selectedRemoteOption,
      companyName: companyName,
    });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          id="role-select"
          multiple
          value={selectedRole}
          onChange={(event, element) => handleSelectToggle(event, element)}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected
                .filter((role) => role.isSelected)
                .map((role) => (
                  <Chip
                    key={role.value}
                    label={role.label}
                    onDelete={() => handleDelete(role.value)}
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(event) => event.stopPropagation()}
                      />
                    }
                  />
                ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {selectedRole
            .filter((role) => !role.isSelected)
            .map((role) => (
              <MenuItem key={role.value} value={role.value}>
                {role.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="experience-label">Experience</InputLabel>
        <Select
          labelId="experience-label"
          id="experience-select"
          value={selectedExperience}
          onChange={(event) => setSelectedExperience(event.target.value)}
          MenuProps={MenuProps}
        >
          {experienceData.map((experience) => (
            <MenuItem key={experience.value} value={experience.value}>
              {experience.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="employees-label">Number of Employees</InputLabel>
        <Select
          labelId="employees-label"
          id="employees-select"
          value={selectedEmployees}
          onChange={(event) => setSelectedEmployees(event.target.value)}
          MenuProps={MenuProps}
        >
          {employeesData.map((employees) => (
            <MenuItem key={employees.value} value={employees.value}>
              {employees.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="salary-label">Base Salary</InputLabel>
        <Select
          labelId="salary-label"
          id="salary-select"
          value={selectedBaseSalary}
          onChange={(event) => setSelectedBaseSalary(event.target.value)}
          MenuProps={MenuProps}
        >
          {baseSalaryData.map((salary) => (
            <MenuItem key={salary.value} value={salary.value}>
              {salary.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="remote-label">Remote Option</InputLabel>
        <Select
          labelId="remote-label"
          id="remote-select"
          value={selectedRemoteOption}
          onChange={(event) => setSelectedRemoteOption(event.target.value)}
          MenuProps={MenuProps}
        >
          {remoteOptionsData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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
