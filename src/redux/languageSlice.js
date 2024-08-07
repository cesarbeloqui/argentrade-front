import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "es",
};
export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state) => state.language.value;
export const selectLocales = (state) => state.language.locales;

export default languageSlice.reducer;
