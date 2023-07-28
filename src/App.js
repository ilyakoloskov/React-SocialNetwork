import 'reset-css'
import './App.sass'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'
import Player from './components/Player/Player'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Users from './components/Users/Users'

function App() {
  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users/*" element={ <Users />} />

        </Routes>
      </main>
      <Sidebar />
      <Player />
    </div>
  )
}

export default App
