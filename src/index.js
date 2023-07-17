import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import { BrowserRouter } from 'react-router-dom'
import state from './state/state'
import { addPost, updateNewPostText, subscribe } from './state/state'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>
  )
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)
