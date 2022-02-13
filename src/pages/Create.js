import React from "react";
import { Typography, Button } from "@material-ui/core";

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <Button variant="contained" disableElevation>
        Button
      </Button>
    </div>
  );
}
