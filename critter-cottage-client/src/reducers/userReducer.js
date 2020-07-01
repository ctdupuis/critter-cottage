export default function userReducer(
    state = {
        currentUser: null
    },
    action
) {
    switch (action.type) {
        case 'LOGIN_USER':
            console.log(action)
            return {
                ...state,
                currentUser: action.user
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: null
            }
        case 'LOGIN_ERROR':
            console.log(action)
            return {
                ...state,
                error: action.err
            }
        case 'START_SESSION_REQUEST':
            return {
                ...state
            }
        default: return state;
    }
}