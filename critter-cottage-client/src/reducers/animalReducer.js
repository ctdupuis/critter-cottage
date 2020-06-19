export default function animalReducer(
    state = { 
        animals: []
    },
     action
) {
    switch (action.type) {
        case 'ADD_ANIMAL':
            return {
                ...state,
                animals: [...state.animals, action.animal]
            }
        default: return state;
    }
}