import React, { useState } from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  TextField,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

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
  const [category, setCategory] = useState("money");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, details, category);
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
      <br />
      <br />

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h5" component="h2">
          Form
        </Typography>
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
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel value="money" control={<Radio />} label="Money" />
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel
            value="reminders"
            control={<Radio />}
            label="Reminders"
          />
          <FormControlLabel value="work" control={<Radio />} label="Work" />
        </RadioGroup>
        <br />
        <Button color="secondary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
