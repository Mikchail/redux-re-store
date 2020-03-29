import React, { Component } from 'react'

import BookList from './bookList'
import Spinner from '../spinner/spinner'
import withBookStore from '../hoc/withBookStore.js'
import { fetchBooks ,bookAddedToCart} from '../../actions/index'
import { connect,  } from 'react-redux'
import  compose  from '../../utils';
import './index.scss'

class BookListContainer extends Component {

  componentDidMount() {
    
    this.props.fetchBooks()

  }


  render() {
    const { books, loading, error ,onAddedToCart } = this.props

    if (loading) {

      return <Spinner />
    }
    if (error) {
      return <h2>Все плохо{error}</h2>
    }
    return (
      <BookList onAddedToCart={onAddedToCart} books={books}/>
    )
  }


}

const mapStateToProps = ({bookList:{ books, loading, error }}) => {
  
  return {
    books,
    loading,
    error
  }
}
const mapDispatchToProps = (dispatch,{bookStoreServices}) => {
  // const {  } = ownProps;
  
  return {
    fetchBooks:  fetchBooks(bookStoreServices,dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    
  }
 
}
export default compose(
  withBookStore(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
