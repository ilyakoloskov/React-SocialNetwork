import { NavLink } from 'react-router-dom'
import styles from './Header.module.sass'

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__about} box`}>
        <div className="about__name">IK</div>
        <div className="about__employments">
          <span className="about__employ">frontend-developer</span>
        </div>
      </div>
      {/* <div className={`${styles.header__menu} box`}>
        <span className="menu__breadcrumb">menu</span>
        <span className={`${styles.header__burger} burger`}>X</span>
      </div> */}
      <div className={`${styles.header__player} box player`}>
        <div className="player__controls">
          <div className="player__btn">
            <img className="player__btn-icon" src="/icons/prev.svg" alt="" />
          </div>
          <div className="player__btn">
            <img className="player__btn-icon" src="/icons/play.svg" alt="" />
          </div>
          {/* <div className="player__btn">
            <img className="player__btn-icon" src="/icons/pause.svg" alt="" />
          </div> */}
          <div className="player__btn">
            <img className="player__btn-icon" src="/icons/next.svg" alt="" />
          </div>
        </div>
        <img className="player__cover" src="/images/profile.jpg" alt="" />
        <div className="player__currents">
          <span className="player__start">00:00</span>
          <div className="player__duration"></div>
          <span className="player__end">02:38</span>
        </div>
        <div className="player__volume">
          <input type="range" name="" id="" />
        </div>
      </div>
      <div className={`${styles.header__auth} box`}>
        {props.isAuth ? (
          `${props.login}`
        ) : (
          <NavLink className="btn" to={'/login'}>
            Login
          </NavLink>
        )}
        {/* <img src={`${props.photos}`} alt="" /> */}
      </div>
    </header>
  )
}
export default Header
