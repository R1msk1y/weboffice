import { Link } from "react-router-dom";
import { data } from "./../helpers/projectList";
import gitBtnBlack from "./../img/icons/gitHub-black.svg";
const Store_page = () => {
  return (
    <main className="projectsWrapper">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Страница интернет магазина</h1>

          <img src={data[1].img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Сайт написан на: HTML, SCSS, JavaScript.</p>
          </div>
          <div className="projects__box-btn">
            <a
              href="https://r1msk1y.github.io/webmarket/"
              target="_blank"
              className="btn-outline"
            >
              <img src={gitBtnBlack} alt="" />
              GitHub Pages
            </a>
            <a
              href="https://github.com/R1msk1y/JSforInternetShop"
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
export default Store_page;
