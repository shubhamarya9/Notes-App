console.log("Starting app");
const fs = require("fs");
const _ = require("lodash");
const notes = require("./notes");
const yargs = require("yargs");
const titleOptions = {
  describe: "title of note",
  demand: true,
  alias: "t"
};
const bodyOptions = {
  describe: "body of note",
  demand: true,
  alias: "b"
};
const argv = yargs
  .command("add", "add a note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "list note(s)")
  .command("read", "read a note", {
    title: titleOptions
  })
  .command("remove", "remove a note", {
    title: titleOptions
  })
  .help().argv;

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
  var listNote = notes.listNote(argv.title);
  console.log(`Printing ${listNote.length} notes(s)`);
  listNote.forEach(note => {
    notes.logNote(note);
  });
} else if (command === "remove") {
  var remove = notes.removeNote(argv.title);
  var message = remove ? "Note was removed" : "No change occured";
  console.log(message);
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  notes.logNote(note);
} else console.log("Invalid operation");
