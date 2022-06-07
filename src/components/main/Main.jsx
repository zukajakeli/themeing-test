import React from "react";
import Typography from "@mui/material/Typography";

const Main = ({ colorType }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
      }}
    >
      <Typography variant="h2" color={colorType}>
        This is the main content, you can change text color from panel 🔥
      </Typography>
    </div>
  );
};

export default Main;
