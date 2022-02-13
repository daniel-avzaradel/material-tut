import React, { useState } from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  TextField,
} from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  field: {
    marginTop: 20,
    marginTop: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      console.log(title, details);
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        className={classes.title}
      >
        Create a New Note
      </Typography>
      <Button variant="contained" disableElevation className={classes.btn}>
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
      <br />
      <br />
      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          variant="outlined"
          label="Note Title"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          variant="outlined"
          label="Details"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          required
        />
        <br />
        <Button
          color="secondary"
          variant="contained"
          type="Submit"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
