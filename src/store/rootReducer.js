import { combineReducers } from 'redux';

import {bookReducer} from '../books/booksReducer';
import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
    books : bookReducer,
    form:formReducer
});

export {
    rootReducer
}