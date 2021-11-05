const fs = require("fs");
const chalk = require("chalk");
const path = require('path');

function addNote(fileName, data) {
  try {
    if(!fs.existsSync(fileName)){
      fs.writeFileSync(fileName, JSON.stringify([]));
    }
    var fileData = JSON.parse(fs.readFileSync(fileName));
    fileData.push(data);
    fs.writeFileSync(fileName, JSON.stringify(fileData));
    console.log(chalk.green("Adding new note was successful."));
    return fileData;
  } catch (error) {
    console.log(chalk.red("Adding new note was unsuccessful."));
    console.log(chalk.red(error));
  }
}

module.exports = addNote;
