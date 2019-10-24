const fs = require('fs')
const book = {
    "title": "Ego is the Enemy",
    "author": "Ryan Holiday"
}



// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)
// console.log(bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json")
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name);

data.name = "Arif"
data.age = 50

const dataChange = JSON.stringify(data)
fs.writeFileSync("1-json.json", dataChange)
console.log(dataChange);


// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)