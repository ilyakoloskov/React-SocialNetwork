import { combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profileReducer'
import playerReducer from './playerReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

// За каждую ветку объекта, отвечает свой reducer
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  playerBar: playerReducer,
})

let store = createStore(reducers)

window.store = store

export default store
