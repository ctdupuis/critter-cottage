import axios from 'axios';

export const login = userdata => {
        return  async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.post('http://localhost:3001/login', {
                email: userdata.email,
                password: userdata.password
            }, { withCredentials: true }
            )
        const resp = response.data
        console.log("user data right after login", resp)
            if (resp.logged_in === true) {
                const user = resp.user
                dispatch({ type: 'LOGIN_USER', user })
            } else {
                const err = resp.error
                dispatch({ type: 'LOGIN_ERROR', err })
            }
    }
}

export const signup = userdata => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.post('http://localhost:3001/signup', {
            email: userdata.email,
            password: userdata.password,
            f_name: userdata.f_name,
            l_name: userdata.l_name
        }, { withCredentials: true }
        )
        const resp = response.data
        // console.log("user data right after signup", resp)
        if (resp.status === "created") {
            const user = resp.user
            const reqs = resp.requests
            dispatch({ type: 'LOGIN_USER', user })
            dispatch({ type: 'STORE_REQUESTS', reqs })
        } else {
            const err = resp.errors
            dispatch({ type: 'LOGIN_ERROR', err })
        }
    }
}

// const signIn = (user) => {
//     return({ type: 'LOGIN_USER', user })
// }


export const getLoginStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        const response = await axios.get('http://localhost:3001/logged_in', { withCredentials: true })
        const data = response.data
        console.log('result of session check', data)
        if (data.logged_in === true ) {
            const user = data.user
            const reqs = data.requests
            dispatch({ type: 'LOGIN_USER', user })
            dispatch({ type: 'STORE_REQUESTS', reqs })
        }
    }
}

export const endSession = () => {
    return (dispatch) =>  {
        axios.get('http://localhost:3001/logout', { withCredentials: true})
        .then(res => {
            dispatch({ type: 'LOGOUT_USER' })
            dispatch({ type: 'RESET_REQS' })
        })
    }
}
