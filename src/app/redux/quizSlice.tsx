import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  correct: false,
  background: true,
};
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCorrectAnswer(state, action) {
      state.correct = action.payload;
    },
    setBackground(state) {
      state.background = !state.background;
    },
  },
});
export const { setCorrectAnswer, setBackground } = quizSlice.actions;
export default quizSlice.reducer;
