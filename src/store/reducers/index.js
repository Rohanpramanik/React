import { combineReducers } from 'redux';
import HomeScreenReducer from './HomeScreenReducers';

const createReducer = asyncReducers =>

    combineReducers({
        HomeScreen: HomeScreenReducer,
        ...asyncReducers
    });

export default createReducer;