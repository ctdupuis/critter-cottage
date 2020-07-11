import axios from 'axios';

export const login = (userdata, history) => {
    // debugger
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
                const reqs = resp.requests
                dispatch({ type: 'LOGIN_USER', user })
                dispatch({ type: 'STORE_REQUESTS', reqs })
                history.push('/profile')
            } else {
                const err = resp.error
                dispatch({ type: 'LOGIN_ERROR', err })
                history.push('/profile')
                //try pushing history or returning history here
            }
    }
}

export const signup = (userdata, history) => {
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
        debugger
        if (resp.status === "created") {
            const user = resp.user
            dispatch({ type: 'LOGIN_USER', user })
            history.push('/profile')
        } else {
            const err = resp.errors
            debugger
            dispatch({ type: 'LOGIN_ERROR', err })
            history.push('/signup')
        }
    }
}

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
