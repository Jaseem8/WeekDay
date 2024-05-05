import React from "react";
import ReactDOM from "react-dom";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",

        zIndex: 99, // Ensure the CircularProgress is on top of other content
      }}
    >
      <CircularProgress />
    </div>,
    document.body
  );
};

export default Loader;
