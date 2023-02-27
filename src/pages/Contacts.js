import selfImg from "./../img/self.jpg";
const Contacts = () => {
  return (
    <main className="about">
      <div className="container">
        <h1 className="title-1">Обо мне</h1>
        <div className="about__inner">
          <div className="about__photo">
            <img className="about__photo-img" src={selfImg} />
          </div>
          <div className="about__descr">
            <p className="about__descr-text">
              {" "}
              Меня зовут Василий, мне 32 года.
            </p>
            <p className="about__descr-text">
              Пишу на JavaScript, ищу работу в It компании на позицию Junior
              разработчик.
            </p>
            <p className="about__descr-text about__descr-text--three">
              Стек основных технологий, с которыми я работаю:
              <br />
              - HTML
              <br />
              - CSS
              <br />
              - JavaScript
              <br />
              - React
              <br />
              Вспомогательные:
              <br />
              - графические редакторы: Figma, Adobe Photoshop, Adobe XD.
              <br />
              - система контроля версий Git.
              <br />- CSS препроцессор SASS
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
