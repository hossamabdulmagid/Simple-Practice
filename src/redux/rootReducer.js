import { combineReducers } from 'redux';
import dataReducers from './data/dataReducer'
const rootReducer = combineReducers({
    data: dataReducers
});

export default rootReducer;