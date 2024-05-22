import React from 'react'; // Importamos React
import { useState } from 'react'; // Importamos useState desde React

// Definimos el componente funcional UseState
export const UseState = () => {
  const [count, setCount] = useState(0); // Declaramos el estado 'count' con el valor inicial de 0 y su función actualizadora 'setCount'

  // Función para incrementar el contador
  const increment = () => setCount(count + 1); // Actualiza el estado 'count' incrementándolo en 1
  // Función para decrementar el contador
  const decrement = () => setCount(count - 1); // Actualiza el estado 'count' decrementándolo en 1

  // Renderizado del componente
  return (
    <>
    <div className='container'> {/* Contenedor principal */}
      <p className='contador'>Contador useState: {count}</p> {/* Muestra el valor actual del contador */}
      <div className='button-container'> {/* Contenedor de los botones */}
        <button className='button' onClick={increment}>Incremento</button> {/* Botón para incrementar */}
        <button className='button' onClick={decrement}>Decremento</button> {/* Botón para decrementar */}
        <button className='button' onClick={() => setCount(0)}>Reset</button> {/* Botón para reiniciar */}
      </div>
    </div>
    </>
  );
};
