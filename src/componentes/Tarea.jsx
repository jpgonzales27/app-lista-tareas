import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Tarea = ({
  tarea,
  tareaCompletada,
  handleEditarTarea,
  handleElimimarTarea,
}) => {
  const [editadantoTarea, setEditadantoTarea] = useState(false);
  const [editarTarea, setEditarTarea] = useState(tarea.texto);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditarTarea(tarea.id, editarTarea);
    setEditadantoTarea(false);
  };

  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckCircle : faCircle}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => tareaCompletada(tarea.id)}
      />
      <div className="lista-tareas__texto">
        {editadantoTarea ? (
          <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={editarTarea}
              onChange={(e) => setEditarTarea(e.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div>
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => {
            setEditadantoTarea(!editadantoTarea);
          }}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => handleElimimarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Tarea;
