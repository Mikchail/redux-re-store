import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app/app'
import ErrorBoundry from './components/errorBoundry/errorBoundri'
import BookstoreServices from './services/bookStoreServices'
import {BookStoreProvider} from './components/bookStoreContext/bookStoreContext'

import store from './store'

const bookStoreServices = new BookstoreServices()
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookStoreProvider value={bookStoreServices}>
        <Router>
          <App/>
        </Router>
      </BookStoreProvider>
    </ErrorBoundry>
  </Provider>
,document.getElementById('root')
);

