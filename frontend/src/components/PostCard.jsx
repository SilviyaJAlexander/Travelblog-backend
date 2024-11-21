import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p className="text-gray-500 text-sm">By {post.author}</p>
        <p className="mt-2 text-gray-700">{post.content.substring(0, 100)}...</p>
        <Link
          to={`/post/${post.id}`}
          className="block mt-4 text-sky-600 font-semibold hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
