import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

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
      <Button
        endIcon={<KeyboardArrowRightIcon />}
        variant="outlined"
        disableElevation
      >
        Outlined
      </Button>
      <br />
      <br />
      <Button
        color="secondary"
        variant="contained"
        onClick={() => console.log("you clicked me")}
        endIcon={<SendIcon />}
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
      <br />
      <br />
      {/* icons */}
      <AcUnitIcon color="secondary" />
      <AcUnitIcon fontSize="large" />
      <AcUnitIcon />
      <AcUnitIcon fontSize="small" />
    </Container>
  );
}
