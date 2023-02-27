import Work from "../components/work/Work";
import { data } from "../helpers/projectList";

const Projects = () => {
  return (
    <div className="projectsWrapper">
      <div className="container">
        <h2 className="title-1">Мои проекты</h2>
        <ul className="projects">
          {data.map((onceProject, index) => {
            return (
              <Work
                key={index}
                title={onceProject.title}
                img={onceProject.img}
                skills={onceProject.skills}
                linkOnRouter={onceProject.linkOnRouter}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
