import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/src/assets/data.js" }),
  endpoints: (builder) => ({
    getDataSpanish: builder.query({
      query: () => "es",
    }),
  }),
});
