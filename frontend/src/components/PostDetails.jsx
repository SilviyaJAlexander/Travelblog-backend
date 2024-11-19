import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, deletePost } from '../utils/api';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPostById(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    navigate('/');
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
      <div className="mt-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded mr-2"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(`/posts/edit/${id}`)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
