const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArr) {
    const newNote = body;
    notesArr.push(newNote);

    // write new array to JSON file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr , null, 2)
    );

    return newNote;
}

function deleteNote(id, notesArr) {
    const updatedNotesArr = notesArr.filter(note => note.id !== id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify(updatedNotesArr, null, 2)
    );
    return updatedNotesArr;
}

module.exports = { createNewNote, deleteNote }