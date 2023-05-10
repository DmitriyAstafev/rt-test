import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  githubData: {},
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setGithubData: (state, action) => {
      state.githubData = action.payload;
      localStorage.setItem("githubData", JSON.stringify(action.payload));
      console.log(state.githubData);
    },
  },
});

export const { setGithubData, setLoading } = projectSlice.actions;

export const selectProject = (state) => state.project;

export default projectSlice.reducer;
