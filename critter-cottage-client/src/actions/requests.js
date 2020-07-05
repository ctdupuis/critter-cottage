import axios from 'axios';

export function sendAdoptionForm(formdata) {
    return async dispatch => {
        const response = await axios.post('http://localhost:3001/requests', {
            animal_id: formdata.animalID,
            email: formdata.email,
            f_name: formdata.f_name,
            l_name: formdata.l_name,
            experience:formdata.experience
        }, { withCredentials:true })
        const request = response.data
        dispatch({ type: 'ADD_REQUEST', request })
    }
}