import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "work") {
        return "1px solid red";
      }
    },
  },
});

function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <Card elevation={1} className={classes.test}>
      <CardHeader
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
