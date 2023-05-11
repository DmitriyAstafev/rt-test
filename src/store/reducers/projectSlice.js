import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  countPerPage: 10,
  currentPage: 1,
  isLoading: false,
  githubData: {},
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setStateFromLS: (state) => {
      state.searchQuery = JSON.parse(localStorage.getItem("searchQuery"));
      state.currentPage = JSON.parse(localStorage.getItem("currentPage"));
      state.isLoading = JSON.parse(localStorage.getItem("isLoading"));
      state.githubData = JSON.parse(localStorage.getItem("githubData"));
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      localStorage.setItem("searchQuery", JSON.stringify(action.payload));
    },
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

export const { setGithubData, setLoading, setCurrentPage, setStateFromLS, setSearchQuery } =
  projectSlice.actions;

export const selectProject = (state) => state.project;

export default projectSlice.reducer;
