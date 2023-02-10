import { useEffect, useState } from "react";
import "./App.css";
import FormularioTareas from "./componentes/FormularioTareas";
import Header from "./componentes/Header";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  /**
   * Recuperamos informacion de localStorage para el valor inicial de nuestros state
   *
   * localStorage.getItem("valorAbuscar") Estamos accediendo a localStorage
   *                                    y preguntado por algun valor en particualr
   * JSON.parse(localStorage.getItem("valorAbuscar")) si esta valor existe lo transformaos
   *                                  al tipo de   dato que necesitamos usando "JSON.parse()"
   * y si no existe le asiganamos un valor inicial por defecto a nuestros state
   */
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  const tareasOcultadas = localStorage.getItem("ocultarCompletadas")
    ? JSON.parse(localStorage.getItem("ocultarCompletadas"))
    : false;

  const [tareas, setTareas] = useState(tareasGuardadas);
  const [ocultarCompletas, setOcultarCompletas] = useState(tareasOcultadas);

  /**
   * Haciendo uno de useEffect almacenamos los valores en localStorage.
   * haciendo que cada useEffect este atento a los cambios en un estado especifico
   *
   * localStorage.setItem("nombreKey", JSON.stringify(valorAguardar))
   * Estamos accediendo a localStorage y asignando un
   *
   * "nombreKey" con el que guardaremos nuestros datos en localStorage, este es
   *            el mismo valor que usamos para recuperar la informacion del localStorage
   *
   * JSON.stringify(valorAguardar) usando el metodo JSON.stringify transformaos
   *                                  al tipo dato que necesitamos guardar a un string
   *                                  para poderlo almacenar el localStorage
   */
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    localStorage.setItem("ocultarCompletadas", ocultarCompletas.toString());
  }, [ocultarCompletas]);
  return (
    <div className="contenedor">
      <Header
        ocultarCompletas={ocultarCompletas}
        setOcultarCompletas={setOcultarCompletas}
      />
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
      <ListaTareas
        tareas={tareas}
        setTareas={setTareas}
        ocultarCompletas={ocultarCompletas}
      />
    </div>
  );
};

export default App;
