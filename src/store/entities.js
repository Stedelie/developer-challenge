import { combineReducers } from 'redux';
import worksReducer from 'store/works';

export default combineReducers({
    works: worksReducer,
})
