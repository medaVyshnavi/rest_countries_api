import React from "react";
import classes from "./header.module.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className={classes.header}>
      <h3>Where in the world? </h3>
      <button
        className={classes.headerIcon}
        onClick={(e) => setIsDarkMode(!isDarkMode)}
      >
        <DarkModeOutlinedIcon /> <p>Dark Mode</p>
      </button>
    </div>
  );
};

export default Header;
