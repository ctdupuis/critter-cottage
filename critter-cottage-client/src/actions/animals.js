import axios from 'axios';

export function fetchAnimals() {
    return (dispatch) => {
      dispatch({ type: 'START_STORE_REQUEST' });
      axios.get('http://localhost:3001/animals')
        .then(res => {
          const animals = res.data
          dispatch({ type: 'STORE_ANIMALS', animals })
        })
    };
}
