import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseURL } from "../utility/config/config";

type PostsResponse = any;
export const taxdApi = createApi({
  reducerPath: "taxdApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BaseURL}/api/v1/`,
    prepareHeaders: (headers) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVtZXNoQG1haWxpbmF0b3IuY29tIiwidXNlcklkIjoxLCJ2YWxpZGF0aW9uU3RhdHVzIjowLCJpYXQiOjE3MTg3MDk1MjAsImV4cCI6MTcxODczMTEyMH0.CenxDGb11jl543BQwq3smZVhGPuqAQ2PrLshMH_V7PM";
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Catagories"],

  endpoints: (builder) => ({
    getAssessment: builder.query<PostsResponse, void>({
      query: () =>
        "/assessment?assessment_id=f95ba433-2319-11ef-8e3d-0ae99b1edddc&assessment_type=SELF_ASSESSMENT&assessment_year=__2022-23",
      providesTags: ["Catagories"],
    }),
    assessment: builder.mutation({
      query: ({ patch, assessment_id, assessment_type }) => ({
        url: `/assessment?assessment_id=${assessment_id}&assessment_type=${assessment_type}`,
        method: "POST",
        body: patch,
      }),
      invalidatesTags: ["Catagories"],
    }),
  }),
});

export const { useAssessmentMutation, useGetAssessmentQuery } = taxdApi;
