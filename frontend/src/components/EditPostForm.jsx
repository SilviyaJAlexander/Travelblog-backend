import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, updatePost } from '../utils/api';

const EditPostForm = () => {
  const { id } = useParams(); // Extract the post ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    content: '',
    cover: '',
  });

  useEffect(() => {
    // Fetch the post details to pre-fill the form
    const fetchPost = async () => {
      const { data } = await getPostById(id);
      setFormData(data);
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await updatePost(id, formData);
      navigate(`/post/${id}`); // Navigate back to the post details page after update
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Post</h2>
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-medium mb-1">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-medium mb-1">Content</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="cover" className="block text-gray-700 font-medium mb-1">Cover (URL)</label>
        <input
          type="text"
          id="cover"
          name="cover"
          value={formData.cover}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="flex justify-center mt-4">
      <button
        type="button"
        onClick={handleUpdate}
        className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-800"
      >
        Update
      </button>
      </div>
    </form>
  );
};

export default EditPostForm;
