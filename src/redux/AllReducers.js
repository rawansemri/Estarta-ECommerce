import {combineReducers} from 'redux'
import productsReducer from './products/reducer';
import authReducer from './auth/reducer';
import cartReducer from './cart/reducer';

const AllReducers = combineReducers({
    productsReducer,
    authReducer,
    cartReducer,
    
})

export default AllReducers;