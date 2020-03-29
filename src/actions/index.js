const booksLoaded = (newBooks) => { 
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
}

/*
name space
FETCH_BOOKS_REQUEST
FETCH_BOOKS_SUCCESS
FETCH_BOOKS_FAILER

*/
const bookRequest = () => {
  return {
    type: 'BOOKS_REQUESTED'
  }
}


const booksError = (error) => {
  return{
    type: 'BOOKS_ERROR',
    payload: error
  }
}

const fetchBooks = (bookStoreServices,dispatch) => () => {

  dispatch(bookRequest());
  bookStoreServices.getBooks()
    .then((data) =>{

      return dispatch(booksLoaded(data))
  })


    .catch(error => dispatch(booksError(error)));
}


const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
}

const bookDeleteFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETE_FROM_CART',
    payload: bookId
  }
}
const bookDisFromCart = (bookId) => {
  return {
    type: 'BOOK_DIS_TO_CART',
    payload: bookId
  }
}
const bookIncFromCart = (bookId) => {
  return {
    type: 'BOOK_INC_TO_CART',
    payload: bookId
  }
}

export {
  bookDisFromCart,
  bookDeleteFromCart,
  bookAddedToCart,
  fetchBooks
}