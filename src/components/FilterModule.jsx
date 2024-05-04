import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
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
export default function FilterModule({ state, setState, title }) {
  const handleSelectToggle = (event, element) => {
    const selection = element.props.value; // selected item

    // Update the isSelected property of the selected role
    const updatedSelectedRoles = state.map((role) =>
      selection === role.value ? { ...role, isSelected: true } : role
    );

    setState(updatedSelectedRoles);
  };

  const handleDelete = (value) => {
    setState((prevSelected) =>
      prevSelected.map((role) =>
        role.value === value ? { ...role, isSelected: false } : role
      )
    );
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="role-label">{title}</InputLabel>
      <Select
        labelId="role-label"
        id="role-select"
        multiple
        value={state}
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
        {state
          .filter((role) => !role.isSelected)
          .map((role) => (
            <MenuItem key={role.value} value={role.value}>
              {role.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
