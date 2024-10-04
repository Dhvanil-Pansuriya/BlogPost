import React from 'react';
import { useParams } from 'react-router-dom';

const Post = ({ posts }) => {
  const { id } = useParams();
  const post = posts[parseInt(id)];

  if (!post) {
    return <h2 className="text-center text-2xl text-gray-500 font-bold my-10">Please Wait...</h2>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
        {post.urlToImage && (
          <div className="relative h-96 overflow-hidden">
            <img
              src={post.urlToImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{post.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {post.content || "Content not available. Please check the full article."}
          </p>

          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gray-500  rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition duration-300"
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
