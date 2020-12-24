import * as Actions from '../actions';

const initialState = {
    users: [],
    user: {},
    selectedUser: {}
}
const HomeScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case Actions.GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case Actions.SELECT_USER:
            return {
                ...state,
                selectedUser: action.payload
            }
        default: return state
    }
}
export default HomeScreenReducer