import React from 'react';
import { BookStoreConsumer } from '../bookStoreContext/bookStoreContext';

const withBookStore = () => (Wrapped) =>{

  return (props) => {
    return (
        
          <BookStoreConsumer>
            {
              (bookStoreServices) => {
               return(<Wrapped {...props} bookStoreServices={bookStoreServices} />)
              }
            }
          </BookStoreConsumer>
    );
  }

}  

export default withBookStore;