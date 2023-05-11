import React from "react";
import { useSelector } from "react-redux";
import ProjectItem from "../ProjectItem/ProjectItem";
import { selectProject } from "../../store/reducers/projectSlice";
import styles from "./ProjectList.module.css";
import Paginator from "../Paginator/Paginator";
import CountSelector from "../../CountSelector/CountSelector";

const ProjectList = () => {
  const { githubData, isLoading, currentPage, countPerPage } =
    useSelector(selectProject);

  const projectsOnPage = githubData?.items?.slice(
    (currentPage - 1) * countPerPage,
    (currentPage - 1) * countPerPage + countPerPage
  );

  return (
    <div className={`container ${styles.mainProject}`}>
      {githubData?.total_count === 0 && !isLoading && (
        <div className={`${styles.another}`}>
          <h3>По данному запросу ничего не найдено.</h3>
        </div>
      )}
      {isLoading ? (
        <div className={`${styles.another}`}>
          <h3>Поиск проектов...</h3>
        </div>
      ) : (
        <div
          className={`justify-content-between flex-wrap flex-row list-group ${styles.inner}`}
        >
          {projectsOnPage?.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                repoUrl={project.html_url}
                title={project.name}
                avatarUrl={project.owner.avatar_url}
                authorName={project.owner.login}
                starsCount={project.stargazers_count}
                viewsCount={project.watchers_count}
                authorUrl={project.owner.html_url}
              />
            );
          })}
        </div>
      )}

      {projectsOnPage?.length && !isLoading ? (
        <>
          <CountSelector />
          <Paginator />
        </>
      ) : null}
      {/* {(projectsOnPage?.length && !isLoading) && <Paginator />} */}
    </div>
  );
};

export default ProjectList;
