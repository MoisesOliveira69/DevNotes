import React, { useState, useEffect } from 'react';
import Note from './Note';
import './styles.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#fef3c7");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote() {
    if (title.trim() === "" || content.trim() === "") return;
    const newNote = {
      id: Date.now(),
      title,
      content,
      color
    };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  }

  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <div className="container">
      <h1>📝 DevNotes</h1>
      <div className="input-area">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título da nota"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Conteúdo da nota..."
        />
        <div className="color-picker">
          <label>Cor:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button onClick={addNote}>Adicionar nota</button>
      </div>
      <div className="notes-area">
        {notes.map(note => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}

export default App;
