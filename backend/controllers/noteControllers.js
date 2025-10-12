const NoteModel = require("../model/noteModel");
const getNotes = async (req, res) => {
  try {
    const response = await NoteModel.find();
    if (!response) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res
      .status(200)
      .json({ message: "All notes fetched Successfully", notes: response });
  } catch (error) {
    console.log(error);
  }
};

const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    if (!title || !content) {
      return res.status(500).json({ message: "All field required" });
    }
    const response = await NoteModel.create({ title, content });
    if (!response) {
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ message: "Note created successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getNotes, createNote };
