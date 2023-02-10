import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = ({ ocultarCompletas, setOcultarCompletas }) => {
  return (
    <header className="header">
      <h1 className="header__titulo">Lista de tareas</h1>
      {ocultarCompletas ? (
        <button
          className="header__boton"
          onClick={() => setOcultarCompletas(!ocultarCompletas)}
        >
          mostrar todo
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      ) : (
        <button
          className="header__boton"
          onClick={() => setOcultarCompletas(!ocultarCompletas)}
        >
          mostrar no completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      )}
    </header>
  );
};

export default Header;
