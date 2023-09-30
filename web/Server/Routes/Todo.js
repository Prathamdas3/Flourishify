import express from 'express';
import {
  todoList,
  singleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../Controllers/Todo.js';
const router = express.Router();

router.get('/', todoList);
router.get('/:id', singleTodo);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
