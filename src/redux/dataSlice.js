import { createSlice } from "@reduxjs/toolkit";
import locales from "../assets/data";
const initialState = {
  value: locales,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const selectData = (state) => state.data.value;

export default dataSlice.reducer;
