import { combineReducers } from 'redux';

import {bookReducer} from '../books/booksReducer';

const rootReducer = combineReducers({
    books : bookReducer
});

export {
    rootReducer
}