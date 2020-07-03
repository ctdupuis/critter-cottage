import axios from 'axios';
import { DirectUpload } from 'activestorage'

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
    const response = await axios.post('http://localhost:3001/animals', {
      name: animaldata.name,
      gender: animaldata.gender,
      species: animaldata.species,
      breed: animaldata.breed,
      bio: animaldata
    }, { withCredentials: true }
    )
    const animal = response.data
    dispatch({ type: 'ADD_ANIMAL', animal })
    uploadFile(animal.avatar, animal)
  }
}

const uploadFile = (file, animal) => {
  const upload = new DirectUpload(file, 'http://localhost:3001/rails/active_storage/direct_uploads')
  upload.create((error, blob) => {
    if (error) {
      console.log(error)
    } else {
      console.log('No errors here..')
    }
  })
}