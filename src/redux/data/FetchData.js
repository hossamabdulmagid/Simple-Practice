import { fetchDataStart, fetchDataSuccess, fetchDataError } from './dataAction'
import axios from 'axios';
const fetchUsers = () => {
        console.log("fetchUsers")

    return dispatch => {
        
        dispatch(fetchDataStart());
        alert("will Start Axios")
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log(res)
                dispatch(fetchDataSuccess(res.users));
                return res.users;
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchDataError(error));
            })
    }
}

export default fetchUsers;