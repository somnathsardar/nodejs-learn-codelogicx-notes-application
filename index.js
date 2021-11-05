const yargs = require("yargs");
const addNote = require('./hlelperModules/addNote');
const removeNote = require('./hlelperModules/removeNote');
const readNote = require('./hlelperModules/readNote');
const listNotes = require('./hlelperModules/listNotes');
const fileName = 'data.json';

try {
  yargs(process.argv.splice(2))
  .command({
    command: "add",
    describe: "Add a note",
    builder: {
      title: { demandOption: true, type: "string" },
      body: { demandOption: true, type: "string" },
    },
    handler: (argv)=>{
      const title = argv.title;
      const body = argv.body;
      addNote(fileName, {title, body})
    }
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    builder: {
      title: { demandOption: true, type: "string" }
    },
    handler: (argv)=>{
      removeNote(fileName, argv.title);
    }
  })
  .command({
    command: "read",
    describe: "Read a note",
    builder: {
      title: { demandOption: true, type: "string" }
    },
    handler: (argv)=>{
      const title = argv.title;
      let data = readNote(fileName, title);
    }
  })
  .command({
    command: "list",
    describe: "List notes",
    builder: {
    },
    handler: (argv)=>{
      let data = listNotes(fileName);
    }
  })
  .parse();
} catch (error) {
  console.log(error);
}
