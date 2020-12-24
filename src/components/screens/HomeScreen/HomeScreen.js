import React from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../../../store/actions'
const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(Actions.testfunc({ heel: "hello" }))
    }
    return <div>
        <button onClick={handleClick}>click</button>
    </div>
}
export default HomeScreen;