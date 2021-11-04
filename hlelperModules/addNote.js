const fs = require("fs");
const chalk = require("chalk");

function addNote(fileName, data) {
  try {
    //Reading data from the file
    var fileData = JSON.parse(fs.readFileSync(fileName));

    //Pushing new data into the file.
    fileData.push(data);

    //Writing the udpated data back into the file
    fs.writeFileSync(fileName, fileData);

    console.log(chalk.green("Adding new note was successful."));
    return fileData;
  } catch (error) {
    console.log(chalk.red("Adding new note was unsuccessful."));
  }
}

module.exports = addNote;