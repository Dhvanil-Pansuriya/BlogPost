import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../utils/Loader';


const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=75ff1eb7796245eb8f946618b32607cf`
                );
                setPosts(response.data.articles);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch news');
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    if (loading) {
        return <p className="flex justify-center items-center m-10">
            <Loading />
        </p>;
    }

    if (error) {
        return <p className="text-center text-red-600">{error}</p>;
    }

    return (

        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-600">Latest News</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:px-15 sm:px-6">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <img
                            src={post.urlToImage}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-700 mb-4">{post.description}</p>
                        <Link
                            to={`/post/${index}`}
                            className="text-gray-500 hover:underline border-2 p-2 rounded-md bg-gray-200"
                        >
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
