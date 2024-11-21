import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import CreatePostForm from './components/CreatePostForm';
import PostDetails from './components/PostDetails';
import EditPostForm from './components/EditPostForm';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 py-6">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Create Post Form */}
          <Route path="/create-post" element={<CreatePostForm />} />

          {/* Post Details */}
          <Route path="/post/:id" element={<PostDetails />} />

          {/* Edit Post Form */}
          <Route path="/posts/edit/:id" element={<EditPostForm />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
