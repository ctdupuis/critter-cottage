export default function userReducer(
    state = {
        currentUser: null
    },
    action
) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.user
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: null
            }
        default: return state;
    }
}