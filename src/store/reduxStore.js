import { combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profileReducer'
import playerReducer from './playerReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

// За каждую ветку объекта, отвечает свой reducer
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  playerBar: playerReducer,
  auth: authReducer,
})

let store = createStore(reducers)

window.store = store

export default store
