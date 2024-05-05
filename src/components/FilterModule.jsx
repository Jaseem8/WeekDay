import React, { useRef } from "react";
import { Box, Chip, FormControl, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";

// Importing custom SVG icons
import { CancelSVGIcon1, CancelSVGIcon2 } from "../icons/icons";

// Importing CSS styles
import "./FilterModule.css";

// Constants for menu height and padding
const ITEM_HEIGHT = 20;
const ITEM_PADDING_TOP = 48;

// Menu props for Material-UI Select component
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Component for individual filter modules
export default function FilterModule({ state, setState, title }) {
  // Refs for FormControl and TextField
  const formControlRef = useRef(null);
  const textRef = useRef(null);

  // Handler for selecting/deselecting items
  const handleSelectToggle = (event, element) => {
    const selection = element.props.value; // selected item

    // Update the isSelected property of the selected role
    const updatedSelectedRoles = state.map((role) =>
      selection === role.value ? { ...role, isSelected: true } : role
    );

    setState(updatedSelectedRoles);
    formControlRef.current.focus();
    textRef.current.blur(); // Close the dropdown after selection
  };

  // Handler for deleting a selected item
  const handleDelete = (value) => {
    setState((prevSelected) =>
      prevSelected.map((role) =>
        role.value === value ? { ...role, isSelected: false } : role
      )
    );
  };

  // Handler for clearing all selected items
  const clearAll = () => {
    setState((prevSelected) =>
      prevSelected.map((role) => ({
        ...role,
        isSelected: false,
      }))
    );
  };

  return (
    <FormControl
      sx={{
        m: 0.5,
        minWidth: "10%",
      }}
      ref={formControlRef}
    >
      <TextField
        id={`${title}`}
        select
        ref={textRef}
        label={`${title}`}
        variant="outlined"
        SelectProps={{
          multiple: true,
          value: state
            .filter((role) => role.isSelected)
            .map((role) => role.value),
          onChange: (event, element) => handleSelectToggle(event, element),
          renderValue: (selected) => (
            <div className="filter-wrapper">
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => {
                  const role = state.find((role) => role.value === value);
                  return (
                    <Chip
                      key={value}
                      label={role.label}
                      onDelete={() => handleDelete(value)} // Corrected onDelete
                      deleteIcon={
                        <CancelSVGIcon1
                          onMouseDown={(event) => {
                            event.stopPropagation();
                            return handleDelete(value);
                          }}
                          className="cancel-icon1"
                        />
                      }
                    />
                  );
                })}
              </Box>
              <CancelSVGIcon2
                onMouseDown={(event) => {
                  event.stopPropagation();
                  return clearAll();
                }}
                className="cancel-icon2" // Add className
              />
            </div>
          ),
          MenuProps: MenuProps,
        }}
      >
        {state
          .filter((role) => !role.isSelected)
          .map((role) => (
            <MenuItem key={role.value} value={role.value}>
              {role.label}
            </MenuItem>
          ))}
      </TextField>
    </FormControl>
  );
}
