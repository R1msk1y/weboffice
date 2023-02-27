import moon from "./../../img/icons/moon.svg";
import sun from "./../../img/icons/sun.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Портфолио</strong>
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink;
                }}
                to="/"
              >
                Главная
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink;
                }}
                to="/projects"
              >
                Проекты
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? activeLink : normalLink;
                }}
                to="/contacts"
              >
                Обо мне
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
