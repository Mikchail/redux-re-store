import React from 'react'
import BookListContainer from '../bookList/bookListContainer';
import ShopingCartTable from '../shopingCartTable/shopingCartTable';


const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShopingCartTable />
      <h2>Привет ?</h2>
    </div>
  )


}

export default HomePage