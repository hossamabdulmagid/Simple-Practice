import dataTypeAction from './dataType'
export const fetchDataStart = () => ({
    type: dataTypeAction.FETCH_DATA_START

});

export const fetchDataSuccess = (users) => ({
    type: dataTypeAction.FETCH_DATA_SUCCESS,
    users: users

});

export const fetchDataError = (error) => ({
    type: dataTypeAction.FETCH_DATA_ERROR,
    error: error

});
