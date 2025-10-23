import React from 'react';

function Note({ note, onDelete }) {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onDelete(note.id)}>🗑️</button>
    </div>
  );
}

export default Note;
