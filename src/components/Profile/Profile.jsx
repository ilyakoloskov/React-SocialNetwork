import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.sass'

function Profile(props) {
  debugger
  return (
    <section className={styles.profile}>
      <div className={`${styles.profile__wrapper} box`}>
        <ProfileInfo />
      </div>
      <MyPosts postsData={props.state.postsData}/>
    </section>
  )
}

export default Profile
