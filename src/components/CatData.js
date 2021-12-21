import { useEffect, useState } from "react";
import Loading from "./Loading";
//import "./index.css";

const Cat = () => {
   
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://api.thecatapi.com/v1/images/search"
          );
          if (response.ok) {
            const cat = await response.json();
            setImageUrl(cat[0].url);
            setError(null);
            setIsLoading(false);
          } else {
            setError("Hubo un error al obtener el gatito");
          }
        } catch (error) {
          setError("No pudimos hacer la solicitud para obtener el gatito");
        }
      }
      fetchData();
    }
  }, [isLoading]);

  const randomCat = () => {
    setIsLoading(true);
  };

  if (isLoading) {
    return (
      <Loading type='cats' />
    );
  }
  if (error) { // ⬅️ mostramos el error (si es que existe)
    return (
      <div className="App">
        <h1>{error}</h1>
        <button onClick={randomCat}>Volver a intentarlo</button>
      </div>
    );
  }

  return (
    <div className="App">
      <img src={imageUrl} alt="Imagen de gatito aleatoria" />
      <button onClick={randomCat}>
        ¡Otro!{" "}
        <span role="img" aria-label="corazón">
          ❤️
        </span>
      </button>
    </div>
  );
}

export default Cat;