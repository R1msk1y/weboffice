import Header__styles from './Header__styles.module.scss'
const Header = () => {
  return (
    <header className={Header__styles.header}>
      <div className={Header__styles.header__wrapper}>
        <h1 className={Header__styles.header__title}>
          <strong>
            Здравствуйте, меня зовут<em> Василий</em>
          </strong>
          <br />
          <p>Я frontend разработчик на JavaScript</p>
          <p>Это мой сайт портфолио</p>
        </h1>
      </div>
    </header>
  );
};

export default Header;
