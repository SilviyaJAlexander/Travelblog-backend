import { useState } from 'react';
import { createPost } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, body });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <div className="mb-4">
        <label className="block font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
    </form>
  );
};

export default CreatePostForm;
