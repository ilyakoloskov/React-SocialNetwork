import 'reset-css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
// import Profile from './components/Profile/Profile'
import ProfileContainer from './components/Profile/ProfileContainer'

import Sidebar from './components/Sidebar/Sidebar'
import Player from './components/Player/Player'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

function App() {
  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <Routes>
          <Route path="*" element={<ProfileContainer />} />
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
