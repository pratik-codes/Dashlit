// src/services/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a type for the API response (e.g., a Post type)
interface Post {
  id: number;
  title: string;
  body: string;
}

// Create the API service using RTK Query
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    // Define an endpoint for fetching posts
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
  }),
});

// Export hooks for the API endpoints
export const { useGetPostsQuery } = apiSlice;
