import React from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../../../store/actions'
import Header from '../../common/Header'
const HomeScreen = (props) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(Actions.testfunc({ heel: "hello" }))
    }
    return <div>
         <Header/>
    </div>
}
export default HomeScreen;