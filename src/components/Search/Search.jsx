import React from "react";
import styles from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProject,
  setCurrentPage,
  setGithubData,
  setLoading,
  setSearchQuery,
} from "../../store/reducers/projectSlice";

const Search = () => {
  const { searchQuery } = useSelector(selectProject);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const submitHandler = async () => {
    if (searchQuery.length < 3) {
      alert("Для поиска необходимо ввести не менее трех символов");
      return;
    }
    dispatch(setLoading(true));
    const req = await fetch(
      `https://api.github.com/search/repositories?q=${searchQuery}`
    );
    if (req.ok) {
      const res = await req.json();
      dispatch(setGithubData(res));
      dispatch(setLoading(false));
      dispatch(setCurrentPage(1));
    }
  };

  return (
    <header className={`container-fluid ${styles.wrapper}`}>
      <div className="container d-flex justify-content-center">
        <input
          className={`form-control ${styles.input}`}
          type="text"
          value={searchQuery}
          onChange={inputChangeHandler}
          placeholder="Начните вводить текст для поиска (не менее трех символов)"
        />
        <button
          onClick={submitHandler}
          className={`btn btn-primary ${styles.button}`}
        ></button>
      </div>
    </header>
  );
};

export default Search;
