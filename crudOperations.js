import pg from 'pg';
const { Client } = pg;

// Import utility functions
import { getResourceId, processBodyFromRequest, returnErrorWithMessage } from './utils.js';



//Retrieve all posts
export const getPosts = async (req, res) => {
  try {
    const client = new Client({
      connectionString: process.env.PG_URI
    });
    await client.connect();
    const results = await client.query('SELECT * FROM posts;'); // Select from the right table
    await client.end();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results.rows)); // Return the rows array
  } catch (error) {
    console.error('Error fetching posts: ', error);
    returnErrorWithMessage(res);
  }
};
//Retrieve a single post by id
export const getPostById = async (req, res) => {
  try {
    const id = getResourceId(req.url);
    const client = new Client({
      connectionString: process.env.PG_URI
    });
    await client.connect();
    const results = await client.query('SELECT * FROM posts WHERE id = $1;', [id]);
    await client.end();
    if (!results.rowCount) return returnErrorWithMessage(res, 404, 'Post not found');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results.rows[0]));
  } catch (error) {
    console.error('Error fetching post: ', error);
    returnErrorWithMessage(res);
  }
};

//Create a new post
export const createPost = async (req, res) => {
    try {
      const body = await processBodyFromRequest(req); // This utility function gets the body for you
      if (!body) return returnErrorWithMessage(res, 400, 'Body is required');
      const parsedBody = JSON.parse(body); 
      const client = new Client({
        connectionString: process.env.PG_URI
      });
      await client.connect();
      const results = await client.query(
        'INSERT INTO posts (author,title,content,cover,date) VALUES ($1, $2, $3,$4,DEFAULT) RETURNING *;',
        [parsedBody.author, parsedBody.title, parsedBody.content, parsedBody.cover]
      );
      await client.end();
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(results.rows[0]));
    } catch (error) {
      console.error('Error creating post: ', error);
      returnErrorWithMessage(res);
    }
  };
  
  //Update an existing post
export const updatePost = async (req, res) => {
  try {
    const id = getResourceId(req.url);
    const body = await processBodyFromRequest(req);
    if (!body) return returnErrorWithMessage(res, 400, 'Body is required');
    const parsedBody = JSON.parse(body);
    const client = new Client({
      connectionString: process.env.PG_URI
    });
    await client.connect();
    const results = await client.query(
      'UPDATE posts SET author = $1, title = $2, content = $3, cover = $4, date = DEFAULT WHERE id = $5 RETURNING *;',
      [parsedBody.author, parsedBody.title, parsedBody.content, parsedBody.cover ,id]
    );
    await client.end();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results.rows[0]));
  } catch (error) {
    console.error('Error updating post: ', error);
    returnErrorWithMessage(res);
  }
};

//Delete post
export const deletePost = async (req, res) => {
  try {
    const id = getResourceId(req.url);
    const client = new Client({
      connectionString: process.env.PG_URI
    });
    await client.connect();
    await client.query('DELETE FROM posts WHERE id = $1;', [id]);
    await client.end();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Post deleted successfully' }));
  } catch (error) {
    console.error('Error deleting post: ', error);
    returnErrorWithMessage(res);
  }
};