import cuid from 'cuid';
// cuidFn

export default function animalReducer(
    state = { 
        animals: []
    },
     action
) {
    switch (action.type) {
        case 'ADD_ANIMAL':
            const animal = Object.assign({animal: action.animal}, {id: cuid()})
            console.log(animal)
            return {
                ...state,
                animals: [...state.animals, action.animal]
            }
        case 'STORE_ANIMALS':
            return {
                animals: action.animals
            }
        case 'LOGIN_USER':
            console.log(action.user.email)
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