export function fetchAnimals() {
    return (dispatch) => {
      dispatch({ type: 'START_STORE_REQUEST' });
      fetch('http://localhost:3001/animals')
        .then(response => response.json())
        .then(animals => dispatch({ type: 'STORE_ANIMALS', animals }));
    };
  }
// export const storeAnimals = animals => {
//     return ({type: 'STORE_ANIMALS', animals })
// }