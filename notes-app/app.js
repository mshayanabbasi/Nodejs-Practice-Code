const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')


yargs.version("1.1.0")

// console.log(process.argv)
// Create add command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)























// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Shayan!')
// const sum = add(4, -2)
// const notes = getNotes()
// console.log(validator.isEmail('mshayanabbasi@gmail.com'))
// console.log(validator.isURL('https://github.com'))
// console.log(sum);
// console.log(notes)
// const greenMsg = chalk.blue.inverse.italic('Success!')
// console.log(greenMsg);
// console.log(process.argv[2]);
// const command = process.argv[2]
// if ( command === 'add' ) {
//     console.log('Adding notes!');
// }
// else if ( command === 'remove' ) {
//     console.log('Removing notes!');
// }


//Challenge: Append a message to notes.txt
// 
// 1. Use appendFileSync to append to the file
// 2. Run the Project
// 3. Check your work by opening the file and viewing the append text

// fs.appendFileSync('notes.txt', 'I am a Full Stack Developer!')

// Challenge: Define and use a function in a new file
// 
// 1. Create a new file called node.js
// 2. Create getNotes function that returns "Your Notes...."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console