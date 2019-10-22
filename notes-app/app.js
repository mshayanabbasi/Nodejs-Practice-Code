// const validator = require('validator')
const getNotes = require('./notes')
const chalk = require('chalk')
// const sum = add(4, -2)
const notes = getNotes()
// console.log(validator.isEmail('mshayanabbasi@gmail.com'))
// console.log(validator.isURL('https://github.com'))
// console.log(sum);
console.log(notes)
const greenMsg = chalk.green.inverse.bold('Success!')
console.log(greenMsg);






















// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Shayan!')

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