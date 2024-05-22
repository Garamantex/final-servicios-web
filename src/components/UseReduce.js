import React, { useReducer, useRef } from 'react'; // Importamos React, useReducer y useRef de 'react'

const initialState = { count: 0 }; // Definimos el estado inicial del contador con count inicializado en 0

// Función reducer que maneja las acciones para actualizar el estado
function reducer(state, action) {
  switch (action.type) {
    case 'increment': // Si la acción es 'increment'
      return { count: state.count + 1 }; // Incrementa el contador en 1
    case 'decrement': // Si la acción es 'decrement'
      return { count: state.count - 1 }; // Decrementa el contador en 1
    case 'reset': // Si la acción es 'reset'
      return { count: 0 }; // Reinicia el contador a 0
    default: // Si la acción no coincide con las anteriores
      throw new Error(); // Lanza un error
  }
}

// Componente funcional que usa useReducer y useRef
export const UseReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer devuelve el estado actual y la función dispatch
  const countRef = useRef(state.count); // useRef para crear una referencia mutable a state.count

  // Función para incrementar el contador
  const increment = () => {
    countRef.current++; // Incrementa la referencia mutable
    dispatch({ type: 'increment' }); // Despacha la acción 'increment' para actualizar el estado
  };

  // Función para decrementar el contador
  const decrement = () => {
    countRef.current--; // Decrementa la referencia mutable
    dispatch({ type: 'decrement' }); // Despacha la acción 'decrement' para actualizar el estado
  };

  // Función para reiniciar el contador
  const reset = () => {
    countRef.current = 0; // Reinicia la referencia mutable
    dispatch({ type: 'reset' }); // Despacha la acción 'reset' para actualizar el estado
  };

  // Renderizado del componente
  return (
    <>
    <div className='container'> {/* Contenedor principal */}
      <p className='contador'>Contador useReducer y useRef: {countRef.current}</p> {/* Muestra el valor actual del contador */}
      <div className='button-container'> {/* Contenedor de los botones */}
        <button className='button-blue' onClick={increment}>Incremento</button> {/* Botón para incrementar */}
        <button className='button-blue' onClick={decrement}>Decremento</button> {/* Botón para decrementar */}
        <button className='button-blue' onClick={reset}>Reset</button> {/* Botón para reiniciar */}
      </div>
    </div>
    </>
  );
};
