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
            
            default: return state
    }
}