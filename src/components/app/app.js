import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './index.scss';
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import ShopHeader from '../shopHeader/shopHeader'
const App = () => {

  return (
    <main className="container" role='main'>
      <ShopHeader numItems={5} total={201}/>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/cart' component={CartPage} />
      </Switch>
    </main>
  )
}


export default App;