import prisma from '../prisma/index.js';

//create a show Notes
export const allNotes = async (req, res) => {
  try {
    const notes = await prisma.notes.findMany();
    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//show a single note
export const showNote = async (req, res) => {
  try {
    const note = await prisma.notes.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//create a note
export const createNote = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    console.log(title, description);
    const newNote = await prisma.notes.create({
      data: {
        title: title,
        description: description,
        User: { connect: { id: userId } },
      },
    });
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//update a note
export const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const note = await prisma.notes.update({
      where: {
        id: req.params.id,
      },
      data: {
        title,
        description,
      },
    });

    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//delete note
export const deleteNote = async (req, res) => {
  try {
    const note = await prisma.notes.delete({
      where: { id: req.params.id },
    });
    res.status(204).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
