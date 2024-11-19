import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/create" className="hover:underline">Create Post</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
