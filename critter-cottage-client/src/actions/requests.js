import axios from 'axios';
const deploymentURI = 'https://critter-cottage-api.herokuapp.com'
const developmentURI = 'http://localhost:3001'

export function sendAdoptionForm(formdata, history) {
    return async dispatch => {
        const response = await axios.post(`${developmentURI}/requests`, {
            animal_id: formdata.animalID,
            email: formdata.email,
            f_name: formdata.f_name,
            l_name: formdata.l_name,
            experience: formdata.experience,
            comments: formdata.comments
        }, { withCredentials:true })
        const request = response.data
        dispatch({ type: 'ADD_REQUEST', request })
        history.push('/profile')
    }
}

export function sendReview(reviewdata, history) {
    return async dispatch => {
        const response = await axios.put(`${developmentURI}/requests/${reviewdata.id}`, {
            status: reviewdata.status
        }, { withCredentials: true })
        const request = response.data
        dispatch({ type: 'UPDATE_REQUEST', request: request.request })
        dispatch({ type: 'UPDATE ANIMAL', animal: request.animal })
        history.push('/profile')
    }
}