const configObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}


export function login(userdata) {
    // let postObj = Object.assign(configObject, { body: JSON.stringify(userdata) })
    return (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        return fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
            .then(r => r.json())
            .then(user => {
                if (user.error) {
                    dispatch({type: 'LOGIN_ERROR', user})
                } else {
                    dispatch({type: 'LOGIN_USER', user})
                }
            })
    }
}

export function signup(userdata) {
    let postObj = Object.assign(configObject, { body: JSON.stringify(userdata) })
    return (dispatch) => {
        dispatch({ type: 'START_SESSION_REQUEST' })
        fetch('http://localhost:3001/signup', postObj)
        .then(r => r.json())
        .then(user => dispatch({ type: 'LOGIN_USER', user}))
    }
}