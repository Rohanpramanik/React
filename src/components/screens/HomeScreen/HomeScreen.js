import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../store/actions';
import SimpleCard from '../../common/Card';
import SimpleDialog from '../../common/Dailog';
import Header from '../../common/Header'
const HomeScreen = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
        // eslint-disable-next-line
    }, [])
    return <div>
        <Header />
        <SimpleCard />
    </div>
}
export default HomeScreen;