import Footer_style from "./Footer__style.module.scss";
import iconGitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className={Footer_style.footer}>
      <div className="container">
        <div className={Footer_style.footer__wrapper}>
          <div className={Footer_style.social}>
            <div className="social__item">
              <a target="_blank" href="https://github.com/R1msk1y">
                <img src={iconGitHub} alt="Link" />
              </a>
            </div>
            <div className={Footer_style.footer__contacts}>
              <span>Telegram: @wkurganow</span>
              <span>Email: wkurganow@gmail.com</span>
              <span>Телефон: +7 962 785 97 89</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
