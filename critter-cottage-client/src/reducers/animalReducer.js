
export default function animalReducer(
    state = { 
        animals: []
    },
     action
) {
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
            const keepThese = state.animals.filter(an => an.id !== action.animal.id)
            return {
                animals: [...keepThese, action.animal]
            }
        default: return state;
    }
}