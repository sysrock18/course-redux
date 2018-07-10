import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import data from '../api.json';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import data from '../schemas'
import { Map as map } from 'immutable'


const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const homeContainer = document.getElementById('home-container')


render(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);

