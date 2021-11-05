const fs = require("fs");
const chalk = require("chalk");

function listNotes(fileName) {
  try {
    if (fs.existsSync(fileName)) {
      var fileData = JSON.parse(fs.readFileSync(fileName));
      console.log(fileData)
      return fileData;
    } else {
      console.log(chalk.red("File does not exists."));
    }
  } catch (error) {
    console.log(chalk.red("Listing note was unsuccessful."));
    console.log(chalk.red(error));
  }
}

module.exports = listNotes;
