import dataTypeAction from './dataType'
const INITIAL_STATE = {
    isFetch: false,
    users: [],
    error: null
}


const dataReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case dataTypeAction.FETCH_DATA_START:
            return {
                ...state,
                isFetch: true
            }
        case dataTypeAction.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetch: false,
                users: action.payload
            }
        case dataTypeAction.FETCH_DATA_ERROR:
            return {
                ...state,
                isFetch: false,
                error: action.error
            }
        default:
            return state;
    }
}


export default dataReducers;