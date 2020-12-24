import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../store/actions';
import Header from '../../common/Header'
const HomeScreen = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return <div>
        <Header />
    </div>
}
export default HomeScreen;