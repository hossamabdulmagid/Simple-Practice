import dataTypeAction from './dataType'
import axios from 'axios';

export const fetchDataStart = () => ({
    type: dataTypeAction.FETCH_DATA_START
});

export const fetchDataSuccess = (users) => ({
    type: dataTypeAction.FETCH_DATA_SUCCESS,
    payload: users

});

export const fetchDataError = (errormessage) => ({
    type: dataTypeAction.FETCH_DATA_ERROR,
    payload: errormessage

});

const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        const api = `https://jsonplaceholder.typicode.com/users`;
        axios
            .get(api)
            .then(res => {
                dispatch(fetchDataSuccess(res.data))
                console.log(res.data)
            }).catch(errormessage => {
                dispatch(fetchDataError(errormessage));
                console.log('someThing wrong in fetch Data');
            })


    }
}


export default fetchUsers;