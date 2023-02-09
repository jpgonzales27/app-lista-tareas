import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas }) => {
  return (
    <>
      <ul className="lista-tareas">
        {tareas.length > 0 ? (
          tareas.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        ) : (
          <div className="lista-tareas__mensaje">Ingresa una tarea</div>
        )}
      </ul>
    </>
  );
};

export default ListaTareas;
