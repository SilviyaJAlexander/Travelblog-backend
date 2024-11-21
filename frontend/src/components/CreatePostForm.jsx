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
    <div className="max-w-lg mx-auto p-6 bg-beige-100">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-black-100 p-6 rounded shadow-lg border"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create New Post</h2>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-semibold mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        {/* Cover URL */}
        <div className="mb-4">
          <label
            htmlFor="cover"
            className="block text-gray-700 font-semibold mb-2"
          >
            Cover (URL)
          </label>
          <input
            type="text"
            id="cover"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-semibold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;