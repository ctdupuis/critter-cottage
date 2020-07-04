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

export function addAnimal(animaldata) {
  return async (dispatch) => {
    dispatch({type: 'START_ADD_ANIMAL'})
    const response = await axios.post('http://localhost:3001/animals', {
      name: animaldata.name,
      gender: animaldata.gender,
      species: animaldata.species,
      breed: animaldata.breed,
      bio: animaldata.bio,
      image: animaldata.image
    }, { withCredentials: true }
    )
    debugger
    const animal = response.data
    dispatch({ type: 'ADD_ANIMAL', animal })
    debugger
  }
}

export function updateAnimal(animaldata, animalID) {
  return async (dispatch) => {
    // dispatch({ type: 'START_ADD_ANIMAL'})
    console.log(`http://localhost:3001/animals/${animalID}`)
    // const response = await axios.put(`http://localhost:3001${url}`)
  }
}

