const noteRouter = require("express").Router();
const { getNotes, createNote } = require("../controllers/noteControllers");
noteRouter.get("/", getNotes);
noteRouter.post("/", createNote);

module.exports = noteRouter;

