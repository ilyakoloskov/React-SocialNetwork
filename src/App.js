import 'reset-css'
import './App.sass'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Sidebar from './components/Sidebar/Sidebar'
import Player from './components/Player/Player'

function App(props) {
  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/profile/*"
            element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
          />
          <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
        </Routes>
      </main>
      <Sidebar />
      <Player />
    </div>
  )
}

export default App
