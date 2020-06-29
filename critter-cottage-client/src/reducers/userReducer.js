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
                currentUser: action.user,
                requesting: false
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: null
            }
        case 'LOGIN_ERROR':
            console.log(action.user.error)
            return {
                ...state,
                error: action.user.error
            }
        case 'START_SESSION_REQUEST':
            return {
                ...state,
                requesting: true
            }
        default: return state;
    }
}