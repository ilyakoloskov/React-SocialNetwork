import './Sidebar.sass'

function Sidebar() {
  return <aside className="sidebar">
    <div className='sidebar__item box'>
      <h4 className='sidebar__name'>Menu</h4>
      <nav className='sidebar__nav nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a className='nav__link' href="">My profile</a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href="">My friend</a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href="">My images</a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href="">My music</a>
          </li>

        </ul>
      </nav>
    </div>
    <div className='sidebar__item box'>
      <h4 className='sidebar__name'>Tracks list</h4>
    </div>
  </aside>
}

export default Sidebar
