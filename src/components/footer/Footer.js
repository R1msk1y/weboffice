import iconVk from './../../img/icons/vk.svg';
import iconInsta from './../../img/icons/instagram.svg';
import iconTwitter from './../../img/icons/twitter.svg';
import iconGitHub from './../../img/icons/gitHub.svg';
import iconLinkedIn from './../../img/icons/linkedIn.svg';



const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={iconVk}alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={iconInsta} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={iconTwitter} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={iconGitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={iconLinkedIn} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;