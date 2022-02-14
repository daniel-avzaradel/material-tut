import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>
      {notes.map((note) => {
        return <div key={note.id}>{note.title}</div>;
      })}
    </div>
  );
}
