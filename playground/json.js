const fs = require("fs");
const data = {
  title: "And then there were none",
  author: "Agatha Christie"
};

const dataString = JSON.stringify(data);
fs.writeFileSync("notes.json", dataString);
const noteString = fs.readFileSync("notes.json");
const note = JSON.parse(noteString);
