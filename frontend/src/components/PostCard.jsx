const PostCard = ({ post }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={post.cover} alt={post.title} className="h-40 w-full object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-500">By {post.author}</p>
          <p className="text-gray-700 mt-2">{post.content.substring(0, 100)}...</p>
          <button className="mt-4 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-800">
            Read more
          </button>
        </div>
      </div>
    );
  };
  
  export default PostCard;
  