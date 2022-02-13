import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <Button variant="contained" disableElevation>
        Contained
      </Button>
      <br />
      <br />
      <Button variant="outlined" disableElevation>
        Outlined
      </Button>
      <br />
      <br />
      <Button
        color="secondary"
        variant="contained"
        onClick={() => console.log("you clicked me")}
      >
        Submit
      </Button>
      <br />
      <br />
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Container>
  );
}
