import { combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profileReducer'
import playerReducer from './playerReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  player: playerReducer,
})

let store = createStore(reducers)

export default store
