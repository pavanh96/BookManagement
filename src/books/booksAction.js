const LOAD_BOOKS='LOAD_BOOKS';


const loadBooks = () => {
    return {
        type: LOAD_BOOKS,
        books: []
    }
}






export {
    LOAD_BOOKS,
    loadBooks
}