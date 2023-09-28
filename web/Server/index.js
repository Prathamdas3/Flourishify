import express from 'express';
import cors from 'cors';

import Notes from './Routes/Notes.js';
import Todo from './Routes/Todo.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/notes', Notes);
app.use('/todo', Todo);

app.use((req, res) => {
  res.status(404).send('404 not found');
});

app.get('/', (req, res) => {
  res.status(200).send('Hello it is working');
});

app.listen(PORT, (req, res) => {
  console.log(`Listing on port http://localhost:${PORT}`);
});
