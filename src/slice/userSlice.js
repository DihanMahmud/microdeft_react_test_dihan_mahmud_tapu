import { apiSlice } from "./apiSlice";
import { LOGIN, REGISTER } from "../constant";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${LOGIN}`,
                method: 'POST',
                body: data,
                // credentials:"include"
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${REGISTER}`,
                method: 'POST',
                body: data,
                // credentials:"include"
            }),
        }),


    }),
})



export const { useLoginMutation, useRegisterMutation } = userApiSlice