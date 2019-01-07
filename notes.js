const fs = require("fs");
var fetchNotes = () => {
  try {
    const notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {}
};
var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};
var addNote = (title, body) => {
  console.log("adding note", title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNote = title => note.title === title;
  if (duplicateNote.length === 0) {
    notes.push(note);
    saveNotes();
  }
};

var listNote = title => {
  console.log("listing note", title);
};
var removeNote = () => {
  console.log("Removing notes");
};
var readNote = title => {
  console.log("Reading note:", title);
};

module.exports = {
  addNote,
  listNote,
  removeNote,
  readNote
};
