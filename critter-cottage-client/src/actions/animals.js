import axios from 'axios';
// import { DirectUpload } from 'active-storage'

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

export function addAnimal(animaldata) {
  return async dispatch => {
    dispatch({type: 'START_ADD_ANIMAL'})
    
  }
}
