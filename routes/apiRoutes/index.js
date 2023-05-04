const router = require('express').Router();
const notes = require('../../db/db');
const { createNewNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    const results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = createNewNote(req.body, notes);
    return res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    const updatedNotes = deleteNote(req.params.id, notes);
    if (updatedNotes) {
        console.log("response sent")
        return res.json(updatedNotes);
    } else {
        res.send(404);
    }
});

module.exports = router;