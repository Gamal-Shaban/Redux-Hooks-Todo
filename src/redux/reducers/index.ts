import { combineReducers } from 'redux';

// commbine all reducers.. 
import LoadingReducer from './Loading';
import ToastReducer from './Toast';
import HomeReducer from './Home';
import UserReducer from './User'

export default combineReducers({
    loading: LoadingReducer,
    toast: ToastReducer,
    Home:HomeReducer,
    User: UserReducer
})