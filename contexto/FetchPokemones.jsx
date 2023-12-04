import React, { useEffect, useState, createContext } from "react";

const API_URL = "http://app-cdec4268-b88f-4f69-9360-f867ec600cc0.cleverapps.io";

export const AutoContext = createContext();

export function AutoProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}/autos?offset=${(currentPage - 1) * 20}&limit=20`
        );
        if (!response.ok) {
          throw new Error("Error al obtener datos");
        }
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error con Fetch:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const contextValue = { data, loading, setCurrentPage };

  return (
    <AutoContext.Provider value={contextValue}>{children}</AutoContext.Provider>
  );
}
