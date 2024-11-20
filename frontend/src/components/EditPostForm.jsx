const EditPost = ({ post }) => {
  const [formData, setFormData] = useState({
    author: post.author,
    title: post.title,
    content: post.content,
    cover: post.cover,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await updatePost(post.id, formData);
      console.log("Post updated:", response);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deletePost(post.id);
      console.log("Post deleted:", response);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
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
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={handleUpdate}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default EditPost;
