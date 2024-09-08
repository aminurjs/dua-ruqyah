import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  language: Cookies.get("language") || "english",
};
const languageSlice = createSlice({
  name: "languageSlice",
  initialState,
  reducers: {
    // Action to set the language both in state and localStorage
    changeLanguage: (state, { payload }) => {
      state.language = payload.language;
      Cookies.set("language", payload.language);
    },
  },
});

// Export the action to set the language
export const { changeLanguage } = languageSlice.actions;

// Export the reducer
export default languageSlice.reducer;
