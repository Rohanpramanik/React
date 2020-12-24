import * as Actions from '../actions';

const initialState = {
    data: null
}
const HomeScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.test:
            return {
                ...state,
                data: action.payload
            }

        default: return state
    }
}
export default HomeScreenReducer