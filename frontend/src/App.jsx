import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CreatePostForm from './components/CreatePostForm';
import PostDetails from './components/PostDetails';
import EditPostForm from './components/EditPostForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePostForm />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts/edit/:id" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
