import axios from "axios";

export const GET_USER = '[USER] GET USER';
export const GET_USERS = '[USER] GET USERS';
export const SELECT_USER = '[USER] SELECT USER';
export const SEARCH_USER = '[USER] SEARCH USER';
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
export function selectedUser(data, callback) {
    return dispatch => {
        dispatch({
            type: SELECT_USER,
            payload: data
        })
        callback()
    }


}
export function searchUser(data) {
    return dispatch => {
        axios.get('https://api.github.com/users/' + data)
            .then(res => {
                console.log(res)
                dispatch({
                    type: SEARCH_USER,
                    payload: res.data
                })
            }).catch(err => console.log('error fetching users', err))

    }
}