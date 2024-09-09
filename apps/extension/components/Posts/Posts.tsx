// src/components/Posts.tsx
import React from 'react';
import { useGetPostsQuery } from '../../store/slices/apiSlice';

const Posts: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div className='absolute top-[100%] text-lg px-5'>
      <h2>Posts</h2>
      <ul className='flex flex-wrap px-5 py-5'>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
