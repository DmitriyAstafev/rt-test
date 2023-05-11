import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countPerPage: 10,
  currentPage: 1,
  isLoading: false,
  githubData: {},
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      localStorage.setItem("currentPage", JSON.stringify(action.payload));
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      localStorage.setItem("isLoading", JSON.stringify(action.payload));
    },
    setGithubData: (state, action) => {
      state.githubData = action.payload;
      localStorage.setItem("githubData", JSON.stringify(action.payload));
    },
  },
});

export const { setGithubData, setLoading, setCurrentPage } = projectSlice.actions;

export const selectProject = (state) => state.project;

export default projectSlice.reducer;
