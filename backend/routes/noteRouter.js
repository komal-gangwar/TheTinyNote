const noteRouter = require("express").Router();
const { getNotes, createNote, updateNote, deleteNote } = require("../controllers/noteControllers");
noteRouter.get("/", getNotes);
noteRouter.post("/", createNote);
noteRouter.put("/:id", updateNote);
noteRouter.delete("/:id", deleteNote);


module.exports = noteRouter;

