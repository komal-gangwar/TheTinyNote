import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NotesGrid from "./components/NotesGrid";

const API_URL = "http://localhost:5000/api/note/";


const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data.notes || []);
    } catch (error) {
      console.error("Error fetching notes:", error);
      alert("Failed to fetch notes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const addNote = async (noteData) => {
    try {
      const response = await axios.post(API_URL, noteData);
      setNotes([...notes, response.data.note || response.data]);
    } catch (error) {
      console.error("Error adding note:", error);
      alert("Failed to add note.");
    }
  };

  const editNote = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}${id}`, updatedData);
      setNotes(notes.map((n) => (n._id === id ? response.data.note || response.data : n)));
    } catch (error) {
      console.error("Error editing note:", error);
      alert("Failed to edit note.");
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}`);
      setNotes(notes.filter((n) => n._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
      alert("Failed to delete note.");
    }
  };

  return (
    // Replaced inline style with className="main-page-container"
    <div className="main-page-container">
      <Navbar />
      {/* Container to stack the Form and Grid vertically */}
      <div className="main-content-area">
        <NoteForm onAdd={addNote} />
        <NotesGrid notes={notes} onEdit={editNote} onDelete={deleteNote} />
      </div>
    </div>
  );
};

export default App;