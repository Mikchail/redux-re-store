

// const initialState = {
//   total: 220,
//   cartItems: [
//     {
//       id: 12,
//       name: 'Booked 1',
//       count: 3,
//       total: 150
//     },
//     {
//       id: 22,
//       name: 'Booked 122',
//       count: 32,
//       total: 1503
//     },
//   ]
// }

const updateCartItems = (cartItems, item, index) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1),
    ]
  }
  if (index === -1) {
    console.log(cartItems);

    return [
      ...cartItems,
      item
    ]
  } else {
    return [
      ...cartItems.slice(0, index),
      item,
      ...cartItems.slice(index + 1),
    ]
  }



}
const updateCartItem = (book, item = {}, quantity) => {

  const { id = book.id, name = book.title, count = 0, total = 0 } = item
  return {
    id,
    name,
    count: count + quantity,
    total: total + quantity * book.price
  }

}
const updateOrder = (state, bookId, quantity) => {
  console.log(state);
  
  const { shopCarts:{ cartItems }} = state;

  const book = state.bookList.books.find((book) => book.id === bookId)
  const index = cartItems.findIndex((cart) => cart.id === bookId)
  const item = cartItems[index]
  let newItem = updateCartItem(book, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, index)

  }
}
const cartReducer = (state, action) => {

  if (state === undefined) {
    return {
      total: 220,
      cartItems: []
    }
  }
  switch (action.type) {

    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)

    case 'BOOK_DIS_TO_CART':
      return updateOrder(state, action.payload, -1)

    case 'BOOK_DELETE_FROM_CART':

      const item = state.shopCarts.cartItems.find((cart) => cart.id === action.payload)
      return updateOrder(state, action.payload, -item.count)
    default:
      return state.shopCarts;

  }

}


export default cartReducer;