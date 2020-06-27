
export default function animalReducer(
    state = { 
        animals: [],
        requesting: false
    },
     action
) {
    switch (action.type) {
        case 'START_STORE_REQUEST':
            return {
                ...state,
                animals: [...state.animals],
                requesting: true
            }
        case 'ADD_ANIMAL':
            return {
                ...state,
                animals: [...state.animals, action.animal],
                requesting: false
            }
        case 'STORE_ANIMALS':
            return {
                animals: action.animals
            }
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