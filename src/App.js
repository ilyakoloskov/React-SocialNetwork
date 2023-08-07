import 'reset-css'
import { Routes, Route } from 'react-router-dom'

// import Header from './components/Header/Header'
// import Profile from './components/Profile/Profile'
import ProfileContainer from './components/Profile/ProfileContainer'

import Sidebar from './components/Sidebar/Sidebar'
import Player from './components/Player/Player'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'

function App() {
  return (
    <div className="wrapper container">
      <HeaderContainer />
      <main className="main">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />}></Route>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </main>
      <Sidebar />
      <Player />
    </div>
  )
}

export default App
