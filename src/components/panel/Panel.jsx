import React, { useContext } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import { ThemeContext } from "../../context/ThemeContext";
import "./panel.css";

const Panel = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeNavigation = (val) => {
    setTheme((prev) => {
      return {
        ...prev,
        navigation: val,
      };
    });
  };

  const changeTextColor = (val) => {
    setTheme((prev) => {
      return {
        ...prev,
        text: val,
      };
    });
  };

  const changeFooter = (val) => {
    setTheme((prev) => {
      return {
        ...prev,
        footer: val,
      };
    });
  };

  return (
    <>
      <div style={{ marginBottom: 30, fontWeight: "bold" }}>Theming Panel</div>

      <div className="panel-wrapper">
        <InputLabel id="demo-simple-select-label">Nav</InputLabel>
        <Select
          label="Choose header theme"
          value={theme.navigation}
          onChange={(e) => {
            changeNavigation(e.target.value);
          }}
        >
          <MenuItem value="nav-1"> Navigation 1 </MenuItem>
          <MenuItem value="nav-2"> Navigation variant 2 </MenuItem>
        </Select>

        <InputLabel id="demo-simple-select-label">Text Color</InputLabel>
        <Select
          label="Choose Text theme"
          value={theme.text}
          onChange={(e) => {
            changeTextColor(e.target.value);
          }}
        >
          <MenuItem value="primary"> Text primary color </MenuItem>
          <MenuItem value="secondary"> Secondary color theme </MenuItem>
        </Select>

        <InputLabel id="demo-simple-select-label">Footer</InputLabel>
        <Select
          label="Choose Footer theme"
          value={theme.footer}
          onChange={(e) => {
            changeFooter(e.target.value);
          }}
        >
          <MenuItem value="footer-1"> Footer 1 </MenuItem>
          <MenuItem value="footer-2"> Footer variant 2 </MenuItem>
        </Select>
      </div>

      <div style={{ marginTop: 50, fontWeight: "bold" }}>Configuration :</div>
      <div>
        {`
        {navigation: ${theme.navigation}, 
        text: ${theme.text},
         footer: ${theme.footer}}`}
      </div>
    </>
  );
};

export default Panel;
