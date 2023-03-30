import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const frontendAPIHeader = {
  "content-type": "application/json",
};

const baseUrl = "http://dev.myfuelcredit.com/api/v1";

const createRequest = (url: any) => ({ url, headers: frontendAPIHeader });

export const frontendAPI = createApi({
  reducerPath: "frontendAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserDashboard: builder.query({
      query: (userId) => createRequest(`/user/${userId}/dashboard`),
    }),
    login: builder.mutation({
      query: (formData) => ({
        url: "/login",
        method: "POST",
        body: formData,
      }),
    }),
    register: builder.mutation({
      query: (formData) => ({
        url: "/register",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserDashboardQuery,
} = frontendAPI;
