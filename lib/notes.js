const fs = require('fs');
const path = require('path');
const notesArr = require('../db/db');

function createNewNote(body, currentNotes) {
    const newNote = body;
    notesArr.push(newNote);

    // write new array to JSON file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr), null, 2
    );

    return notesArr;
}

module.exports = { createNewNote }