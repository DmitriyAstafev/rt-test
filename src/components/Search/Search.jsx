import React, { useState } from "react";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { setGithubData, setLoading } from "../../store/reducers/projectSlice";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = async () => {
    dispatch(setLoading(true));
    const req = await fetch(
      `https://api.github.com/search/repositories?q=${inputValue}`
    );
    if (req.ok) {
      const res = await req.json();
      dispatch(setGithubData(res));
      dispatch(setLoading(false));
    }
  };

  return (
    <header className={`container-fluid ${styles.wrapper}`}>
      <div className="container d-flex justify-content-center">
        <input
          className={`form-control ${styles.input}`}
          type="text"
          value={inputValue}
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
