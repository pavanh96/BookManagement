const LOAD_BOOKS='LOAD_BOOKS';

const fetchBooks = () => {
    return fetch(`/books/v1/get_all_books`).then((response) => {
      
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });

    
}

const setBooks = (books) => {
    return {
        type: LOAD_BOOKS,
        books
    }
}
const loadBooks = () => {
    return dispatch => fetchBooks().then(data => dispatch(setBooks(data)));
    
    
}






export {
    LOAD_BOOKS,
    loadBooks
}