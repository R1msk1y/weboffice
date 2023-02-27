import iconVk from "./../../img/icons/vk.svg";
import iconInsta from "./../../img/icons/instagram.svg";
import iconTwitter from "./../../img/icons/twitter.svg";
import iconGitHub from "./../../img/icons/gitHub.svg";
import iconLinkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="social">
            <div className="social__item">
              <a href="#!">
                <img src={iconGitHub} alt="Link" />
              </a>
            </div>
            <div>
            <p>Telegram: @wkurganow</p>
            <p>Email: wkurganow@gmail.com</p>
            <p>Телефон: +7 962 785 97 89</p>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
