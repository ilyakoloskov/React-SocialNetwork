import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import { BrowserRouter } from 'react-router-dom'
import store from './store/reduxStore'

import App from './App'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

