import './Sidebar.sass'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__item box">
        <h4 className="sidebar__name">Menu</h4>
        <nav className="sidebar__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="/profile">
                My profile
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/dialogs">
                My dialogs
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/users">
                Users
              </NavLink>
            </li>
            {/* <li className='nav__item'>
            <a className='nav__link' href="">My friend</a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href="">My images</a>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' href="">My music</Link>
          </li> */}
          </ul>
        </nav>
      </div>
      <div className="sidebar__item box">
        <h4 className="sidebar__name">Tracks list</h4>
      </div>
    </aside>
  )
}

export default Sidebar
