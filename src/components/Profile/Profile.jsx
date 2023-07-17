import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.sass'

function Profile(props) {
  return (
    <section className={styles.profile}>
      <div className={`${styles.profile__wrapper} box`}>
        <ProfileInfo />
      </div>
      <MyPosts
        postsData={props.profilePage.postsData}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </section>
  )
}

export default Profile
