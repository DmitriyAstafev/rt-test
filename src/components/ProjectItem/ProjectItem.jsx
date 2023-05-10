import React from "react";
import styles from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  const {
    title,
    avatarUrl,
    starsCount,
    viewsCount,
    authorName,
    repoUrl,
    authorUrl,
  } = props;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        <a href={repoUrl}>{title}</a>
      </h3>
      <figure className={styles.authorInfo}>
        <img alt="author" src={avatarUrl} className={styles.authorPhoto}></img>
        <figcaption>
          <a href={authorUrl}>{authorName}</a>
        </figcaption>
      </figure>
      <div className={`row d-flex flex-row flex-nowrap ${styles.props}`}>
        <span className={styles.stars}>{starsCount}</span>
        <span className={styles.views}>{viewsCount}</span>
      </div>
      <div className="row flex-nowrap">
        <input
          type="text"
          className={`form-control col-8 ${styles.input}`}
          placeholder="Комментарий к проекту"
        ></input>
        <button
          type="submit"
          className={`btn btn-primary col-1 ${styles.button}`}
        ></button>
      </div>
    </div>
  );
};

export default ProjectItem;
