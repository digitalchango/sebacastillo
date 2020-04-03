import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducers from './reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(Reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister();
