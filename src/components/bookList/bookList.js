import React from 'react'
import BookItem from './bookItem'

const BookList = ({ books ,onAddedToCart }) => {
  return <ul className="book-list">
    {
      books.map((book) => {
        return (
          <li  key={book.id}><BookItem onAddedToCart={()=>onAddedToCart(book.id)}  book={book} /></li>
        )
      })
    }
  </ul>
}

export default BookList;