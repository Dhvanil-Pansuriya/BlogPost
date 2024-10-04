import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contect';
import Header from './utils/Header';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=75ff1eb7796245eb8f946618b32607cf'
        );
        setPosts(response.data.articles);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);

  return (
    <Router>
      {/* Add Header at the top */}
      <Header />
      
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<Post posts={posts} />} />
          <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
