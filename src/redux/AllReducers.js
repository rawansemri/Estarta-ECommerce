import {combineReducers} from 'redux'
import productsReducer from './products/reducer';
import authReducer from './auth/reducer';

const AllReducers = combineReducers({
    productsReducer,
    authReducer,
    
})

export default AllReducers;