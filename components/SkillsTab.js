import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";

export default function SkillsTab(props) {
  const [state, setState] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Button
        style={{ backgroundColor: "#F5756B", width: "150px" }}
        variant="contained"
        onClick={() => {
          setState(!state);
          console.log(state);
        }}
      >
        View Skills
      </Button>
      {state && (
        <div>
          <Typography>{props.skills}</Typography>
        </div>
      )}
    </div>
  );
}
