import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, setTareas }) => {
  const tareaCompletada = (id) => {
    /**
     * Para actualizar una propiedad de nuestro objeto usamos {...objeto,propiedad:nuevoValor}
     * lo que hace es hacer una copia de nuestro objeto previamente y luego cambiar el valor
     * a la propiedad que le indicamos
     */
    setTareas(
      // tareas.map((tarea) => {
      //   if (tarea.id === id) {
      //     return { ...tarea, completada: !tarea.completada };
      //   }
      //   return tarea;
      // })
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const handleEditarTarea = (id, nuevoTexto) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
      )
    );
  };

  const handleElimimarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };
  return (
    <>
      <ul className="lista-tareas">
        {tareas.length > 0 ? (
          tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              tareaCompletada={tareaCompletada}
              handleEditarTarea={handleEditarTarea}
              handleElimimarTarea={handleElimimarTarea}
            />
          ))
        ) : (
          <div className="lista-tareas__mensaje">Ingresa una tarea</div>
        )}
      </ul>
    </>
  );
};

export default ListaTareas;
