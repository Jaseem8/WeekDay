import React, { useState } from "react";
import {
  rolesData,
  experienceData,
  employeesData,
  baseSalaryData,
  remoteOptionsData,
} from "./filterData";

const FilterComponent = ({ onFilter }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState("");
  const [selectedBaseSalary, setSelectedBaseSalary] = useState("");
  const [selectedRemoteOption, setSelectedRemoteOption] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleFilter = () => {
    // Call the parent component's filter function with selected filters
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
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        {rolesData.map((role) => (
          <option key={role.value} value={role.value}>
            {role.label}
          </option>
        ))}
      </select>
      <select
        value={selectedExperience}
        onChange={(e) => setSelectedExperience(e.target.value)}
      >
        {experienceData.map((exp) => (
          <option key={exp.value} value={exp.value}>
            {exp.label}
          </option>
        ))}
      </select>
      <select
        value={selectedEmployees}
        onChange={(e) => setSelectedEmployees(e.target.value)}
      >
        {employeesData.map((employees) => (
          <option key={employees.value} value={employees.value}>
            {employees.label}
          </option>
        ))}
      </select>
      <select
        value={selectedBaseSalary}
        onChange={(e) => setSelectedBaseSalary(e.target.value)}
      >
        {baseSalaryData.map((salary) => (
          <option key={salary.value} value={salary.value}>
            {salary.label}
          </option>
        ))}
      </select>
      <select
        value={selectedRemoteOption}
        onChange={(e) => setSelectedRemoteOption(e.target.value)}
      >
        {remoteOptionsData.map((remoteOption) => (
          <option key={remoteOption.value} value={remoteOption.value}>
            {remoteOption.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Search Company Name"
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterComponent;
