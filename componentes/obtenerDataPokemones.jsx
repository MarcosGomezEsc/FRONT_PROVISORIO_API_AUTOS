// Importa los módulos necesarios
import { useState, useContext, useCallback } from "react";
import { AutoContext } from "../contexto/FetchPokemones";
// Cambia el nombre del contexto
// import AutoCards from "./AutoCards";
// import "../cssComponentes/AutoCards.css"; // Asegúrate de tener la ruta correcta

// Función principal que renderiza la lista de autos y el carrito de compras
function DataAutos() {
  // Obtiene el estado y las funciones del contexto
  const { data, loading } = useContext(AutoContext);
  // const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
  const [lista, setLista] = useState("Marca"); // Estado para el tipo de orden (por nombre o por ID)

  // Función para manejar cambios en el término de búsqueda
  {
    /* 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Función para manejar cambios en el tipo de orden
 const handleSort = (event) => {
    setLista(event.target.value);
  };
  
  // Función para ordenar los datos
  const sortedData = [...data].sort((a, b) => {
    if (lista === "Marca") {
      return a.Marca.localeCompare(b.Marca);
    } else if (lista === "id") {
      return a.id - b.id;
    }
    return 0;
  });
*/
  }

  return (
    <div>
      {/* Barra de búsqueda 
      <input
        type="text"
        placeholder="Buscar auto"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Selector de orden
      <div>
        <select className="select" value={lista} onChange={handleSort}>
          <option value="Marca">Ordenar por Marca</option>
          <option value="id">Ordenar por ID</option>
        </select>
      </div>

      {/* Popup de compra 
      {isPopupOpen && selectedProduct && (
        <div className="popup">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
          <p>Auto: {selectedProduct.name}</p>
          <p>Precio: ${selectedProduct.price}</p>
          <p>¿Desea comprar este auto?</p>
          <button onClick={closePopup}>Cancelar</button>
          <button onClick={addToCart}>Confirmar</button>
        </div>
      )}
    */}

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
                </article>
              ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </section>
      )}

      {/* Carrito de compras 
      <div className="carrito">
        <h2>Carrito de Compras</h2>
        <h3>
          Auto <span>____</span> Cantidad <span>___</span> Precio
        </h3>
        <ul>
           {Object.keys(carrito).map((productId, index) => {
            const producto = data.find(
              (item) => item.id === parseInt(productId)
            );
            if (producto) {
              return (
                <li key={index}>
                  {producto.name}
                  <span>__</span>
                  {carrito[productId]}
                  <span>__</span>${producto.price * carrito[productId]}
                </li>
              );
            }
            return null;
          })} 
        </ul>
        {/* <p className="Total">Total: ${precioTotal}</p>
        <button className="btn_eliminar" onClick={resetCart}>
          Eliminar Pedido
        </button> */}
      {/* </div> */}
    </div>
  );
}

// Exporta el componente
export default DataAutos;

//_________________________________________
{
  /*        <section>
          Lista de autos
          {data.length > 0 ? (
            sortedData
            .filter((item) => {
              const searchTermLower = searchTerm.toLowerCase();
              return (
                item.name.toLowerCase().includes(searchTermLower) ||
                item.id.toString().includes(searchTermLower)
                );
              })
              .map((item, index) => (
                <article key={index}>
                  <AutoCards item={item} />
                  <button onClick={() => openPopup(item)}>Comprar</button>
                </article>
              ))
              ) : (
                <p>No se encontraron resultados.</p>
              )} 
        </section>
      )} */
}
