import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const BookItem = ({ book ,onAddedToCart}) => {
  const { title, author ,price, srcImg} = book

  return (
    <div className='book-list-item'>
      <div className='book-cover'>
        <img src={srcImg}  alt=''/>
      </div>
      <div className='book-details'>
        <Link to=''>
        <span className='book-title'>
          {title}
        </span>
        </Link>
        <div className='book-author'>  
          {author}
        </div>
        <div className='book-price'>  
          {price}
        </div>
        <button onClick={onAddedToCart} className="btn btn-info add-to-cart">add to cart</button>
      </div>

    </div>
  )
}

export default BookItem;