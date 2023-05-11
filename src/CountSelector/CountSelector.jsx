import React from "react";
import styles from "./CountSelector.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProject,
  setCountPerPage,
  setCurrentPage,
} from "../store/reducers/projectSlice";

const CountSelector = () => {
  const { countPerPage } = useSelector(selectProject);
  const dispatch = useDispatch();

  const countChangeHandler = (e) => {
    dispatch(setCountPerPage(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={styles.selector}>
      <select
        name="size-pages"
        value={countPerPage}
        onChange={countChangeHandler}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default CountSelector;
