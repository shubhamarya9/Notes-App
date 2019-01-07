const fs = require("fs");
var fetchNotes = () => {
  try {
    const notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
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

  var duplicateNote = notes.filter(note => note.title === title);
  if (duplicateNote.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var listNote = title => {
  console.log("listing note", title);
};
var removeNote = title => {
  var notes = fetchNotes();
  var checkNote = notes.filter(note => note.title !== title);
  saveNotes(checkNote);
  return notes.length !== checkNote.length;
};
var readNote = title => {
  console.log("Reading note:", title);
};

module.exports = {
  addNote,
  listNote,
  removeNote,
  readNote,
  saveNotes
};
