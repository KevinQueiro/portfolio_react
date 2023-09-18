export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/');
      const data = await response.json();
      return data[0];
    } catch (error) {
      throw new Error(`Error al obtener los datos: ${error.message}`);
    }
  };