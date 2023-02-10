import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const FormularioTareas = ({ tareas, setTareas }) => {
  /**
   * Cuando trabajamos con input en react necesitamos crear un state para
   * cada uno para poder enlazarlos obtner su valor y poder manipular en el
   * mismo en nuestra variable state
   *
   * A su ves el input necesita agregan los atributos value={state} que esta
   * ligado a nuestro estado que creamos
   *
   * y tambien necesita la funcion onChange para escuchar los cambios en el
   * state cada que vamos escribiendo algo en el input
   */
  const [inputTarea, setInputTarea] = useState("");

  const handleTarea = (e) => {
    setInputTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /**
     * usando setTareas definimos el nuevo estado
     * haciendo uso del operador spread [..tareas] hacemos una copia del array anteiior
     * y seguido de coma adjuntamos el nuevo objeto que queremos que se agrege
     */
    /**
     ** resuelto el bug al momento de crear la nueva tarea
     * estabamos mando en la propiedad texto:{inputTarea} lo que producia el error al
     * moemento de renderizar la solucion es texto:inputTarea
     */
    setTareas([
      ...tareas,
      {
        id: uuidv4(),
        texto: inputTarea,
        completada: false,
      },
    ]);
    setInputTarea("");
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => {
          handleTarea(e);
        }}
      />
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default FormularioTareas;
