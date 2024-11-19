import pg from 'pg';
const { Client } = pg;

//Connecting to Database
const connectToDB = async () => {
  const client = new Client({
    connectionString: process.env.PG_URI,
  });
  await client.connect();
  return client;
};


// Retrieve all posts
export const getPosts = async (req, res) => {
  try {
    const client = await connectToDB();
    const results = await client.query('SELECT * FROM posts;');
    await client.end();
    res.status(200).json({ success: true, data: results.rows });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ success: false, message: 'Error fetching posts' });
  }
};

// Retrieve a single post by ID
export const getPostById = async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  try {
    const client = await connectToDB();
    const results = await client.query('SELECT * FROM posts WHERE id = $1;', [id]);
    await client.end();
    if (results.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, data: results.rows[0] });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ success: false, message: 'Error fetching post' });
  }
};

// Create a new post
export const createPost = async (req, res) => {
  const { author, title, content, cover } = req.body; // Extract body fields
  if (!author || !title || !content || !cover) {
    return res.status(400).json({ success: false, message: 'All fields are required' });//Validation
  }
  try {
    const client = await connectToDB();
    const results = await client.query(
      'INSERT INTO posts (author, title, content, cover, date) VALUES ($1, $2, $3, $4, DEFAULT) RETURNING *;',
      [author, title, content, cover]
    );
    await client.end();
    res.status(201).json({ success: true, data: results.rows[0] });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ success: false, message: 'Error creating post' });
  }
};
  
  // Update an existing post
export const updatePost = async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  const { author, title, content, cover } = req.body; // Extract body fields
  if (!author || !title || !content || !cover) {
    return res.status(400).json({ success: false, message: 'All fields are required' });//validation
  }
  try {
    const client = await connectToDB();
    const results = await client.query(
      'UPDATE posts SET author = $1, title = $2, content = $3, cover = $4, date = DEFAULT WHERE id = $5 RETURNING *;',
      [author, title, content, cover, id]
    );
    await client.end();
    if (results.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, data: results.rows[0] });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ success: false, message: 'Error updating post' });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  try {
    const client = await connectToDB();
    const results = await client.query('DELETE FROM posts WHERE id = $1 RETURNING *;', [id]);
    await client.end();
    if (results.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ success: false, message: 'Error deleting post' });
  }
};