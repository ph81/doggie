import { useState, useEffect } from 'react';
import Loading from '../Loader'
import { Button } from 'react-bootstrap'

const Dog = () => {
   
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://dog.ceo/api/breeds/image/random"
          );
          if (response.ok) {
            const dog = await response.json();
            setImageUrl(dog.message);
            setError(null);
            setIsLoading(false);
          } else {
            setError("Hubo un error al obtener el perrito");
          }
        } catch (error) {
          setError("No pudimos hacer la solicitud para obtener el perrito");
        }
      }
      fetchData();
    }
  }, [isLoading]);

  const randomDog = () => {
    setIsLoading(true);
  };

  if (isLoading) {
    return (
      <Loading type='dogs'/>
    );
  }
  if (error) { // ⬅️ mostramos el error (si es que existe)
    return (
      <div className="App">
        <h1>{error}</h1>
        <Button onClick={randomDog}>Volver a intentarlo</Button>
      </div>
    );
  }

  return (
    <div className="App">
      <img src={imageUrl} alt="Imagen de perrito aleatoria" />
      <Button onClick={randomDog}>
        ¡Otro!{" "}
        <span role="img" aria-label="corazón">
          ❤️
        </span>
      </Button>
    </div>
  );

}

export default Dog;