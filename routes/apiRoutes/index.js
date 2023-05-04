const router = require('express').Router();
const notes = require('../../db/db');
const { createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let updatedNotes = createNewNote(req.body);
    return res.json(updatedNotes);
});

module.exports = router;