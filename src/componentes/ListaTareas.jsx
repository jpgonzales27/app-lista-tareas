import React from "react";

const ListaTareas = ({ tareas }) => {
  return (
    <>
      <ul className="lista-tareas">
        {tareas.length > 0 ? (
          tareas.map((tarea) => <li key={tarea.id}>{tarea.texto}</li>)
        ) : (
          <div className="lista-tareas__mensaje">Ingresa una tarea</div>
        )}
      </ul>
    </>
  );
};

export default ListaTareas;
