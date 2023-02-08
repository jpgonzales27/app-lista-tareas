import { useState } from "react";
import "./App.css";
import FormularioTareas from "./componentes/FormularioTareas";
import Header from "./componentes/Header";

const App = () => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: "Trabajar",
      completada: false,
    },
    {
      id: 2,
      texto: "programar",
      completada: false,
    },
  ]);

  console.log(tareas);
  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
    </div>
  );
};

export default App;
