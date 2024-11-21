import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, deletePost } from '../utils/api';

const PostDetails = () => {
  const { id } = useParams(); // Retrieve the ID from the URL
  const [post, setPost] = useState(null); // State to hold the post details
  const navigate = useNavigate(); // Hook for navigation

  // Fetch post details on component mount
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(id); // Fetch post by ID
        console.log("Post data:", JSON.stringify(response, null, 2)); // Debugging output
        setPost(response.data); // Set the actual post data
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };
    fetchPost();
  }, [id]);

  // Handle post deletion
  const handleDelete = async () => {
    try {
      await deletePost(id); // Delete the post via API
      navigate('/'); // Redirect to homepage after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Loading state
  if (!post) return <div className="text-center text-lg font-semibold">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow-md">
      {/* Post Image */}
      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      {/* Post Title */}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

      {/* Post Metadata */}
      <p className="text-gray-500 text-sm mb-2">By {post.author}</p>
      <p className="text-gray-500 text-sm mb-4">
        Published on: {new Date(post.date).toLocaleDateString()}
      </p>

      {/* Post Content */}
      <div className="mt-4 text-lg text-gray-700">{post.content}</div>

      {/* Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={handleDelete}
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-800"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(`/posts/edit/${id}`)}
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-800"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
