export default function ReqReducer(
    state = {
        requests: []
    },
    action
) {
    console.log('reqReducer', action)
    switch(action.type) {
        case 'STORE_REQUESTS':
            return {
                requests: action.reqs
            }
            
            default: return state
    }
}