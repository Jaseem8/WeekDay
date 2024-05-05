import { Box, Chip, FormControl, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";

import "./FilterModule.css";
import { CancelSVGIcon1, CancelSVGIcon2 } from "../icons/icons";
const ITEM_HEIGHT = 20;
const ITEM_PADDING_TOP = 48;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FilterModule({ state, setState, title }) {
  const formControlRef = useRef(null);
  const textRef = useRef(null);
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

  const handleDelete = (value) => {
    setState((prevSelected) =>
      prevSelected.map((role) =>
        role.value === value ? { ...role, isSelected: false } : role
      )
    );
  };
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
