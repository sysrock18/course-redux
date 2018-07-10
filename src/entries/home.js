import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import data from '../api.json';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import data from '../schemas'
import { Map as map } from 'immutable'

function logger({getState, dispatch}) {
	// method for dispatch the next middleware
	return (next) => {
		return (action) => {
			console.log('this is my old state', getState().toJS())
			console.log('were going to send our action', action)
			const value = next(action)
			console.log('this is my new state', getState().toJS())
			return value
		}
	}
}

const store = createStore(
  reducer,
  map(),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(logger)
)


const homeContainer = document.getElementById('home-container')


render(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);

