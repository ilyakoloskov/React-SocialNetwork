import 'reset-css'
import './App.sass'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Sidebar from './components/Sidebar/Sidebar'
import Player from './components/Player/Player'


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/dialogs" element={<Dialogs/>} />
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </main>
        <Sidebar />
        <Player />
      </div>
    </BrowserRouter>
  )
}

export default App
