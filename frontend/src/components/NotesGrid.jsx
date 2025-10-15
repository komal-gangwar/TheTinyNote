import React from "react";
import NoteCard from "./NoteCard";

export default function NotesGrid({ notes, onEdit, onDelete }) {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
