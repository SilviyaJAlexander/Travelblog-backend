import { useState } from 'react';
import { createPost } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    content: "",
    cover: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPost(formData);
      console.log("Post created:", response);
      // Clear form after successful submission
      setFormData({
        author: "",
        title: "",
        content: "",
        cover: "",
      });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="cover">Cover (URL):</label>
        <input
          type="text"
          id="cover"
          name="cover"
          value={formData.cover}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;