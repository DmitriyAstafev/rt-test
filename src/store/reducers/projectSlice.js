import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  githubData: {},
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setGithubData: (state, action) => {
      state.githubData = action.payload;
      localStorage.setItem("githubData", JSON.stringify(action.payload));
      console.log(JSON.parse(localStorage.getItem("githubData")));
    },
  },
});

export const { setGithubData } = projectSlice.actions;

export default projectSlice.reducer;
