import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.sass'

function Profile() {
  return (
    <section className={styles.profile}>
      <div className={`${styles.profile__wrapper} box`}>
        <ProfileInfo />
      </div>
      <MyPosts />
    </section>
  )
}

export default Profile
