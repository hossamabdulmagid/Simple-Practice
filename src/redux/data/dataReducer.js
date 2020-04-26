import dataTypeAction from './dataType'
const INITIAL_STATE = {
    isFetch: false,
    users: [],
    errormessage: undefined
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
                users: [...state.users, action.payload]
            }
        case dataTypeAction.FETCH_DATA_ERROR:
            return {
                ...state,
                isFetch: false,
                errormessage: action.payload
            }
        default:
            return state;
    }
}


export default dataReducers;