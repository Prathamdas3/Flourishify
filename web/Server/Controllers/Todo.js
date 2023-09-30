import prisma from '../prisma/index.js';

//show all todo
export const todoList = async (req, res) => {
  try {
    const allTodo = await prisma.todo.findMany();
    res.status(200).json(allTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Error' });
  }
};

//show single todo
export const singleTodo = async (req, res) => {
  try {
    const todo = await prisma.todo.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//create todo
export const createTodo = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        tags,
      },
    });
    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//update todo
export const updateTodo = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const todo = await prisma.todo.update({
      where: {
        id: req.params.id,
      },
      data: {
        title,
        description,
        tags,
      },
    });
    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//delete todo
export const deleteTodo = async (req, res) => {
  try {
    const todo = await prisma.todo.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
