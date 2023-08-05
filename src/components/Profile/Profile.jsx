import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.sass'
import MyPostsContainer from './MyPosts/MyPostsContainer'

function Profile(props) {
  console.log(props)

  return (
    <section className={styles.profile}>
      <div className={`${styles.profile__wrapper} box`}>
        <ProfileInfo profile={props.profile} />
      </div>
      <MyPostsContainer />
    </section>
  )
}

export default Profile
