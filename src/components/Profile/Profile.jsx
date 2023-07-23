import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.sass'
import MyPostsContainer from './MyPosts/MyPostsContainer'

function Profile(props) {
  return (
    <section className={styles.profile}>
      <div className={`${styles.profile__wrapper} box`}>
        <ProfileInfo />
      </div>
      <MyPostsContainer store={props.store} />
    </section>
  )
}

export default Profile
