import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavegacionPag } from "./componentes/NavegacionPag";
import "./cssComponentes/App.css";
import DataAutos from "./componentes/obtenerDataPokemones";
import { AutoContext } from "./contexto/FetchPokemones";
//____

import Inicio from "./componentes/Inicio";
import Productos from "./componentes/Productos";
import AcercaDe from "./componentes/AcercaDe";
import Contacto from "./componentes/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <AutoContext>
          <Routes>
            <Route path="/" element={<NavegacionPag />}>
              <Route path="/" exact element={<Inicio></Inicio>} />
              <Route path="/productos" element={<Productos></Productos>} />
              <Route path="/acerca-de" element={<AcercaDe></AcercaDe>} />
              <Route path="/contacto" element={<Contacto></Contacto>} />
            </Route>

            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>

          <DataAutos></DataAutos>

          <AcercaDe> </AcercaDe>
        </AutoContext>
      </BrowserRouter>
    </>
  );
}

export default App;
