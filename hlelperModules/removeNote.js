const fs = require("fs");
const chalk = require("chalk");

function removeNote(fileName, title) {
  try {
    if (fs.existsSync(fileName)) {
      var fileData = JSON.parse(fs.readFileSync(fileName));
      if (!fileData) {
        console.log(chalk.red("Sorry! File is empty."));
        return;
      }
      fileData = fileData.filter((d) => d.title != title);
      fs.writeFileSync(fileName, JSON.stringify(fileData));
      console.log(chalk.green("Removing note was successful."));
      return fileData;
    } else {
      console.log(chalk.red("File does not exists."));
    }
  } catch (error) {
    console.log(chalk.red("Removing note was unsuccessful."));
    console.log(chalk.red(error));
  }
}

module.exports = removeNote;
