import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    getUserById: builder.query({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});
// We can use Mutations as well
// Diff: => mutations are used to change the data while queries are used to access the data.
export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;