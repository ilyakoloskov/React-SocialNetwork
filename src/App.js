import 'reset-css'
import './App.sass'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'
import Player from './components/Player/Player'

function App() {
  return (
    <div className="wrapper container">
      <Header />
      <main className="main">
        <Profile />
      </main>
      <Sidebar />
      <Player />
    </div>
  )
}

export default App
