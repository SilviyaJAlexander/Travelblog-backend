const BASE_URL = 'http://localhost:3000'; // Replace with your actual backend URL if different

// Fetch all posts
export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Fetch a single post by ID
export const getPostById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post with id: ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    throw error;
  }
};

// Create a new post
export const createPost = async (postData) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Update a post by ID
export const updatePost = async (id, postData) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error(`Failed to update post with id: ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

// Delete a post by ID
export const deletePost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete post with id: ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
