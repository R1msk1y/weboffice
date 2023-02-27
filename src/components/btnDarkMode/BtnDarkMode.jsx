import { useState, useEffect, useRef } from "react";
import moon from "./../../img/icons/moon.svg";
import sun from "./../../img/icons/sun.svg";
import "./style.css";
const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useState(`light`);
  const btnRef = useRef(null);
  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);
  const ToggleDarkModer = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };
  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={ToggleDarkModer}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};
export default BtnDarkMode;
