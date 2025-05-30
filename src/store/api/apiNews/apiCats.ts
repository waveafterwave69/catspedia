import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thecatapi.com/v1',
    }),
    tagTypes: ['Cats'],
    endpoints: (builder) => ({
        getCats: builder.query({
            query: () => `/breeds`,
        }),
        getCatsImg: builder.query({
            query: (breedsId) => `/images/search?breed_ids=${breedsId}`,
        }),
    }),
})

export const { useGetCatsQuery, useGetCatsImgQuery } = apiSlice
