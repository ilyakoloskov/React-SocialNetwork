import styles from './Header.module.sass'

function Header() {
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
      <div className={`${styles.header__player} box`}>player</div>
    </header>
  )
}
export default Header
