import { createSlice } from "@reduxjs/toolkit";

// Initial state, check if language is stored in localStorage, otherwise default to "english"
const initialState = {
  language: localStorage.getItem("language") || "english",
};
console.log(initialState);
const languageSlice = createSlice({
  name: "languageSlice",
  initialState,
  reducers: {
    // Action to set the language both in state and localStorage
    changeLanguage: (state, { payload }) => {
      state.language = payload.language;
      localStorage.setItem("language", payload.language);
    },
  },
});

// Export the action to set the language
export const { changeLanguage } = languageSlice.actions;

// Export the reducer
export default languageSlice.reducer;
