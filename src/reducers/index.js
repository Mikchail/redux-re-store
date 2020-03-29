// import {combineReducers} from 'redux'

import bookReducer from './bookReducer'
import cartReducer from './cartReducer'




// const appReducer = combineReducers({
//   bookState: bookReducer,
//   cartState: cartReducer
// })
export const rootReducer = (state, action) => {
  return {
    bookList: bookReducer(state, action),
    shopCarts: cartReducer(state, action)
  }
};







