console.log("Starting app");
const fs = require("fs");
const _ = require("lodash");
const notes = require("./notes");
const yargs = require("yargs");
const argv = yargs.argv;
const command = process.argv[2];
console.log("command:", command);
console.log(argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note added");
    notes.logNote(note);
  } else {
    console.log("No changes occured");
  }
} else if (command === "list") {
  notes.listNote(argv.title);
} else if (command === "remove") {
  var remove = notes.removeNote(argv.title);
  var message = remove ? "Note was removed" : "No change occured";
  console.log(message);
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  notes.logNote(note);
} else console.log("Invalid operation");
