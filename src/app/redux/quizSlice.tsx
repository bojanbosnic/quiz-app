import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  correct: false,
};
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCorrectAnswer(state, action) {
      state.correct = action.payload;
    },
  },
});
export const { setCorrectAnswer } = quizSlice.actions;
export default quizSlice.reducer;
