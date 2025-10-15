import React, { useState } from "react";

const pastelColors = [
  "#d1f7f6ff", 
  "#fbdcceff", 
  "#f6d0e8ff", 
  "#f3bacfff", 
  "#d7ecd0ff", 
  "#DDE7C7", 
  "#b3f4dcff", 
  "#cddaf1ff", 
  "#f5ccf3ff"  
];

export default function NoteCard({ note, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.content);

  const handleSave = () => {
    // Only call onEdit if title or text has actually changed
    if (title !== note.title || text !== note.content) {
      onEdit(note._id, { title, content: text });
    }
    setIsEditing(false);
  };

  // Deterministic pastel color generation based on the note's unique ID
  const color = pastelColors[
    [...note._id].reduce((acc, char) => acc + char.charCodeAt(0), 0) % pastelColors.length
  ];

  return (
    // Apply the determined pastel color as an inline style
    <div className="note-card" style={{ backgroundColor: color }}>
      {isEditing ? (
        // The editing view (inside the ternary condition)
        <div className="note-card-editor">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="note-edit-title"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="note-edit-content"
          />
        </div>
      ) : (
        // The display view (inside the ternary condition)
        <>
          <h3>{title}</h3>
          <p>{text}</p>
        </>
      )}

      <div className="note-card-buttons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
    </div>
  );
}