import intinalstate from '../store/intinalstate';
import {LOAD_BOOKS} from './booksAction';

export const bookReducer=(state=intinalstate.books,action)=>{
    switch(action.type){
        case LOAD_BOOKS:{
            return {
                ...state,
                book:action.books
            };
        }
        default:
            return state;
        
    }
}