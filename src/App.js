import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search/Search";
import ProjectList from "./components/ProjectLIst/ProjectList";
import { useDispatch } from "react-redux";
import { setStateFromLS } from "./store/reducers/projectSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStateFromLS());
  }, []);

  return (
    <>
      <Search />
      <ProjectList />
    </>
  );
}

export default App;
