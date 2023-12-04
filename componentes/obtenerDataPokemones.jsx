// Importa los módulos necesarios
import { useState, useContext, useCallback } from "react";
import { AutoContext } from "../contexto/FetchPokemones";

function DataAutos() {
  const { data, loading } = useContext(AutoContext);
  // const [lista, setLista] = useState("Marca"); // Estado para el tipo de orden (por nombre o por ID)

  return (
    <div>
      {/* Contenido principal */}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <section>
          {/* Lista de autos */}
          {data.length > 0 ? (
            sortedData
              .filter((item) => {
                const searchTermLower = searchTerm.toLowerCase();
                return (
                  item.Marca.toLowerCase().includes(searchTermLower) ||
                  item.Anio.toString().includes(searchTermLower)
                );
              })
              .map((item, index) => (
                <article key={index}>
                  <AutoCards item={item} />
                  <button onClick={() => openPopup(item)}>Comprar</button>
                  console.log(item)
                </article>
              ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </section>
      )}
    </div>
  );
}

export default DataAutos;
