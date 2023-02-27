import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import Navbar__style from "./Navbar__style.module.scss";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className={Navbar__style.nav}>
      <div className="nav__container">
        <div className={Navbar__style.navRow}>
          <NavLink to="/" className={Navbar__style.logo}>
            <strong>Портфолио</strong>
          </NavLink>
          <BtnDarkMode />

          <ul className='nav-list'>
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
