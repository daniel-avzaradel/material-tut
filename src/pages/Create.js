import React, { useState, useHistory } from "react";
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
  FormControl,
  FormLabel,
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
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
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
        <FormControl className={classes.field}>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormLabel>Note Category</FormLabel>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button color="secondary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
