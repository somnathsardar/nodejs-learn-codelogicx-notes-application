const fs = require("fs");
const chalk = require("chalk");

function readNote(fileName, title) {
  try {
    if (fs.existsSync(fileName)) {
      var fileData = JSON.parse(fs.readFileSync(fileName));
      if (!fileData) {
        console.log(chalk.red("Sorry! File is empty."));
        return [];
      }
      fileData = fileData.find((d) => d.title === title);
      if (!fileData) {
        console.log([]);
        return [];
      }
      console.log(fileData);
      return fileData;
    } else {
      console.log(chalk.red("File does not exists."));
    }
  } catch (error) {
    console.log(chalk.red("Listing note was unsuccessful."));
    console.log(chalk.red(error));
  }
}

module.exports = readNote;
