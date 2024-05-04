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
import {
  rolesData,
  experienceData,
  employeesData,
  baseSalaryData,
  remoteOptionsData,
} from "./filterData";

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
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedBaseSalary, setSelectedBaseSalary] = useState([]);
  const [selectedRemoteOption, setSelectedRemoteOption] = useState([]);
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

      {/* Add similar FormControl components for other filters */}

      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterComponent;
