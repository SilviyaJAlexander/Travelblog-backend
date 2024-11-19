import express from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost } from './crudOperations.js';
import 'dotenv/config';
import cors from 'cors';

const app = express();
//Set the port
const port = 3000;
//Middleware that allows requests from frontend
app.use(cors());
//Middleware to parse JSON bodies
app.use(express.json());

//Routes
app.get('/posts',getPosts);
app.get('/posts/:id',getPostById);
app.post('/posts',createPost);
app.put('/posts/:id',updatePost);
app.delete('/posts/:id',deletePost);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});