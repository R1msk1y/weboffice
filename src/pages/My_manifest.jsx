import gitBtnBlack from "./../img/icons/gitHub-black.svg";
import { data } from "./../helpers/projectList";
import { Link } from "react-router-dom";

const My_manifest = () => {
  return (
    <main className="projectsWrapper">
      {console.log(data)}
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Многастраничный сайт</h1>

          <img src={data[0].img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>
              Сайт написан на: HTML, CSS, JavaScript, jQuery. На главной
              странице подключена и настроена библиотека "Slick slider"
            </p>
          </div>
          <div className="projects__box-btn">
            <a
              href="https://r1msk1y.github.io/myManifest/index.html"
              target="_blank"
              className="btn-outline"
            >
              <img src={gitBtnBlack} alt="" />
              GitHub Pages
            </a>
            <a
              href="https://github.com/R1msk1y/myManifest"
              target="_blank"
              rel="noreffer"
              className="btn-outline"
            >
              <img src={gitBtnBlack} alt="" />
              GitHub repository
            </a>
          </div>
          <Link to="/projects" className="btn__project-list">
            К списку проектов
          </Link>
        </div>
      </div>
    </main>
  );
};

export default My_manifest;
