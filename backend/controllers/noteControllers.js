const NoteModel = require("../model/noteModel");

const getNotes = async (req, res) => {
  try {
    const notes = await NoteModel.find();
    return res.status(200).json({ message: "All notes fetched successfully", notes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    if (!title || !content) {
      return res.status(400).json({ message: "All fields required" });
    }
    const note = await NoteModel.create({ title, content });
    return res.status(201).json({ message: "Note created successfully", note });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updateData = {};
if (title) updateData.title = title;
if (content) updateData.content = content;
const note = await NoteModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!note) return res.status(404).json({ message: "Note not found" });
    return res.status(200).json({ message: "Note updated successfully", note });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await NoteModel.findByIdAndDelete(id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getNotes, createNote, updateNote, deleteNote };
