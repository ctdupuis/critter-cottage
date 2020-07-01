import axios from 'axios';

const configObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export const login = userdata => {
    return (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
            axios.post('http://localhost:3001/login', {
                email: userdata.email,
                password: userdata.password
            }, { withCredentials: true }
            ).then(res => {
                if (res.data.logged_in) {
                    const user = res.data.user
                    dispatch({ type: 'LOGIN_USER', user })
                } else {
                    const err = res.data
                    dispatch({ type: 'LOGIN_ERROR', err })
                }
            }).catch(err => {
                console.log(err)
            })
    }
}

export const signup = userdata => {
    return (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        axios.post('http://localhost:3001/signup', {
            email: userdata.email,
            password: userdata.password,
            f_name: userdata.f_name,
            l_name: userdata.l_name
        }, { withCredentials: true }
        ).then(res => {
            if (res.data.status === "created") {
                const user = res.data.user
                dispatch({ type: 'LOGIN_USER', user })
            } else {
                const err = res.data
                dispatch({ type: 'LOGIN_ERROR', err })
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const loginStatus = () => {
    // debugger
    return (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        axios.get('http://localhost:3001/logged_in', { withCredntials: true })
        .then(res => {
            console.log(res)
            if (res.data.logged_in) {
                const user = res.data.user
                // console.log(res, user)
                dispatch({type: 'LOGIN_USER', user })
            }
        }).catch(err => console.log(err))
    }
}