import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  correct: false,
  page: true,
};
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCorrectAnswer(state, action) {
      state.correct = action.payload;
    },
    setPage(state) {
      state.page = !state.page;
    },
  },
});
export const { setCorrectAnswer, setPage } = quizSlice.actions;
export default quizSlice.reducer;
