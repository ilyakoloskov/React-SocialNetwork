import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.sass'
import MyPostsContainer from './MyPosts/MyPostsContainer'

function Profile() {
  return (
    <section className={styles.profile}>
      <div className={`${styles.profile__wrapper} box`}>
        <ProfileInfo />
      </div>
      <MyPostsContainer />
    </section>
  )
}

export default Profile
