import About__styles from "./About__styles.module.scss";

import selfImg from "./../img/self.jpg";
const About = () => {
  return (
    <main className={About__styles.about}>
      <div className="container">
        <h1 className="title-1">Обо мне</h1>
        <div className={About__styles.about__inner}>
          <div className={About__styles.about__photo}>
            <img className="about__photo-img" src={selfImg} />
          </div>
          <div className="about__descr">
            <p className={About__styles.about__descrText}>
              Меня зовут Василий, мне 32 года.
            </p>
            <p className={About__styles.about__descrText}>
              Пишу на JavaScript, ищу работу в It компании на позицию Junior
              разработчик.
            </p>
            <ul className={About__styles.about__list}>
              Стек основных технологий, с которыми я работаю:
              <li> - HTML</li>
              <li> - CSS</li>
              <li> - JavaScript</li>
              <li> - React</li>
            </ul>

            <ul>
              Вспомогательные:
              <li>
                - графические редакторы: Figma, Adobe Photoshop, Adobe XD.
              </li>
              <li>- система контроля версий Git.</li>
              <li>- CSS препроцессор SASS</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
