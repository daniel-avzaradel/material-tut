import React, { useState, useEffect } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      {notes.map((note) => {
        return <div key={note.id}>{note.title}</div>;
      })}
    </div>
  );
}
