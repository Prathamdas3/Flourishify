import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';

import UserSignUp from './Routes/user.js';
import Notes from './Routes/Notes.js';
import Todo from './Routes/Todo.js';
import AiPage from './Routes/ai.js';

config();
const app = express();
const PORT = process.env.PORT || 3000;

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//cookie middleware
app.use(cookieParser());

//routes
app.use('/auth', UserSignUp);
app.use('/notes', Notes);
app.use('/todo', Todo);
app.use('/ai', AiPage);

app.get('/', (req, res) => {
  res.status(200).send('Hello it is working');
});

app.use((req, res) => {
  res.status(404).send('404 not found');
});

app.listen(PORT, () => {
  console.log(`Listing on port http://localhost:${PORT}`);
});
