export default function ReqReducer(
    state = {
        requests: []
    },
    action
) {
    switch(action.type) {
        case 'STORE_REQUESTS':
            return {
                requests: action.reqs
            }
        case 'ADD_REQUEST':
            return {
                ...state,
                requests: [...state.requests, action.request]
            }
        case 'RESET_REQS':
            return {
                requests: []
            }
            default: return state
    }
}