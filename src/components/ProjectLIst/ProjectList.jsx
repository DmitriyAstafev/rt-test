import React from "react";
import { useSelector } from "react-redux";
import ProjectItem from "../ProjectItem/ProjectItem";
import { selectProject } from "../../store/reducers/projectSlice";
import styles from "./ProjectList.module.css";

const ProjectList = () => {
  const { githubData, isLoading } = useSelector(selectProject);
  //   console.log("gggggggggggg", projectArrow);

  return (
    <div className={`container ${styles.mainProject}`}>
      {/* <h2 className="hidden">Найденные проекты</h2> */}

      {isLoading ? (
        <div className={`${styles.another}`}>
          <h3>Поиск проектов...</h3>
        </div>
      ) : (
        <div
          className={`justify-content-between flex-wrap flex-row list-group ${styles.inner}`}
        >
          {githubData?.items?.map((project) => {
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

      {/* <SelectSize
    onChangeSetSize={onChangeSetSize}
    sizePage={sizePage}
    />

    <Paginator
    sizePage={sizePage}
    currentNumber={currentNumber}
    onClickPage={onClickPage}
    data={props.projects}
    /> */}
    </div>
  );
};

export default ProjectList;
