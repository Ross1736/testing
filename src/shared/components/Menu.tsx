import { useState } from "react";
import style from "./Menu.module.scss";
import { APP_ROUTES } from "../../router/routes/app.routes";
import { Link } from "react-router-dom";

function Menu(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={style.navbar}>
      <div className={style.navbarLogo}>
        <a href={APP_ROUTES.HOME}>Mi App</a>
      </div>

      <div className={`${style.navbarLinks} ${isOpen ? style.active : ""}`}>
        <Link to={APP_ROUTES.HOME}>Inicio</Link>
        <Link to={APP_ROUTES.KONVA}>Konva</Link>
      </div>

      <button
        className={style.navbarToggle}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </button>
    </header>
  );
}

export default Menu;
