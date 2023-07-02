import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.sass'

function Profile() {
  return (
    <section className={styles.profile}>
      <div className={`${styles.profile__wrap} box`}>
        <h1 className={`${styles.profile__title} h1`}>Ilya Koloskov</h1>
        <div className={styles.profile__dob}>09 / 03 / 1998</div>
        <img className={styles.profile__avatar} src="/images/profile.jpg" />
        <div className={styles.profile__info}>
          <ul className="profile__info-list">
            <li className="profile__info-item">
              <strong className={styles.profile__strong}>Nationality: </strong>
              <span className="profile__info-span">Russia</span>
            </li>
            <li className="profile__info-item">
              <strong className={styles.profile__strong}>Passion: </strong>
              <span className="profile__info-span">Frontend, music, sport</span>
            </li>
          </ul>
        </div>
        <div className={`${styles.profile__btn} btn display-46`}>Send message</div>
      </div>
      <MyPosts />
    </section>
  )
}

export default Profile
