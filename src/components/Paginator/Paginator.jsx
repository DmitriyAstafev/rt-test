import React from "react";
import styles from "./Paginator.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProject,
  setCurrentPage,
} from "../../store/reducers/projectSlice";

const Paginator = () => {
  const { githubData, countPerPage, currentPage } = useSelector(selectProject);
  const dispatch = useDispatch();
  const projectsCount = githubData?.items?.length;
  const lastPage = Math.ceil(projectsCount / countPerPage);

  const paginatorNum = [];
  for (let i = 0; i < lastPage; i++) {
    paginatorNum.push(i + 1);
  }

  const pageClickHandler = (num) => {
    dispatch(setCurrentPage(num));
  };

  return (
    <nav aria-label="">
      <ul
        className={`pagination pagination-lg justify-content-center ${styles.listPosition}`}
      >
        <li className={currentPage <= 1 ? "page-item disabled" : "page-item"}>
          <button
            className={`page-link ${styles.leftArrow}`}
            onClick={() => pageClickHandler(currentPage - 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&lt;</span>
          </button>
        </li>
        {paginatorNum.map((num) => {
          return (
            <li
              className={num === currentPage ? "page-item active" : "page-item"}
              key={num}
            >
              <button
                className="page-link"
                onClick={() => pageClickHandler(num)}
              >
                {num}
              </button>
            </li>
          );
        })}
        <li
          className={
            currentPage >= lastPage ? "page-item disabled" : "page-item"
          }
        >
          <button
            className={`page-link ${styles.rightArrow}`}
            onClick={() => pageClickHandler(currentPage + 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
