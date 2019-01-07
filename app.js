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
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
  } else {
    console.log("No changes occured");
  }
} else if (command === "list") {
  notes.listNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else if (command === "read") {
  notes.readNote(argv.title);
} else console.log("Invalid operation");
