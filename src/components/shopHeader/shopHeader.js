import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom'

const ShopHeader = ({numItems, total}) => {

  return (
    <header className="shop-header row">
      <Link to='/'>
      <div className='logo text-dark' href="#">Restore</div >
      </Link>
      <Link to="/cart">
      <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart"></i>
        {numItems} items (${total})
      </div>
      </Link>
     
    </header>
  )

}


export default ShopHeader