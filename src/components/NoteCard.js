import React from "react";
import { Card, CardHeader, IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

function NoteCard({ note }) {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
    </Card>
  );
}

export default NoteCard;
