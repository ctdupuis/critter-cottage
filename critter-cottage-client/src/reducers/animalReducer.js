
export default function animalReducer(
    state = { 
        animals: []
    },
     action
) {
    let keepers;
    switch (action.type) {
        case 'START_STORE_REQUEST':
            return {
                ...state,
                animals: [...state.animals]
            }
        case 'ADD_ANIMAL':
            return {
                ...state,
                animals: [...state.animals, action.animal]
            }
        case 'STORE_ANIMALS':
            return {
                animals: action.animals
            }
        case 'UPDATE_ANIMAL':
            keepers = state.animals.filter(an => an.id !== action.animal.id)
            return {
                animals: [...keepers, action.animal]
            }
        case 'REMOVE_ANIMAL':
            keepers = state.animals.filter(an => an.id !== action.animal.id)
            return {
                animals: [...keepers]
            }
        default: return state;
    }
}