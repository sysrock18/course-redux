import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/data'
import normalizedData from '../schemas'

const initialState = {
  data: {
    ...data,
  },
  search: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')


render(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);

