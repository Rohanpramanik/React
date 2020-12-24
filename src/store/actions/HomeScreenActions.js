import axios from "axios";

export const GET_USER = '[USER] GET USER';
export const GET_USERS = '[USER] GET USERS';

export function getUsers() {
    return dispatch =>
        axios.get('https://api.github.com/users')
            .then(res => {
                console.log(res)
                dispatch({
                    type: GET_USERS,
                    payload: res.data
                })
            }).catch(err => console.log('error fetching users', err))
}
export function getUser(name) {
    return dispatch =>
        axios.get('https://api.github.com/users/' + name)
            .then(res => {
                console.log(res)
                dispatch({
                    type: GET_USER,
                    payload: res.data
                })
            }).catch(err => console.log('error fetching user', err))
}