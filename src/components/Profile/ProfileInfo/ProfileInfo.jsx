import styles from '../Profile.module.sass'
import Preloader from '../../UI/Preloader/Preloader'

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  } else {
    return (
      <>
        <h1 className={`${styles.profile__title} h1`}>{props.profile.fullName}</h1>
        <div className={styles.profile__dob}>09 / 03 / 1998</div>
        <img className={styles.profile__avatar} src={props.profile.photos.large} />
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
      </>
    )
  }
}

export default ProfileInfo
