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
var getNote = title => {
  var notes = fetchNotes();
  var checkExist = notes.filter(note => note.title === title);
  return checkExist[0];
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
  return fetchNotes();
};
var removeNote = title => {
  var notes = fetchNotes();
  var checkNote = notes.filter(note => note.title !== title);
  saveNotes(checkNote);
  return notes.length !== checkNote.length;
};

var logNote = note => {
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
module.exports = {
  addNote,
  getNote,
  listNote,
  removeNote,
  saveNotes,
  logNote
};
