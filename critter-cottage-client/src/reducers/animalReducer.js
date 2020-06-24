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
        default: return state;
    }
}