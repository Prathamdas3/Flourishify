import express from 'express';
import {
  allNotes,
  showNote,
  createNote,
  updateNote,
  deleteNote,
} from '../Controllers/Notes.js';

const router = express.Router();

router.get('/', allNotes);
router.get('/:id', showNote);
router.post('/', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
