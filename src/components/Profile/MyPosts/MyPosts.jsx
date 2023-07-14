import Post from './Post/Post'
import styles from './MyPosts.module.sass'

function MyPosts(props) {
  debugger
  let postsData = props.postsData
  let postsElements = postsData.map(post => {
    return <Post messages={post.postText} likesCount={post.likesCount} disLikesCount={post.disLikesCount}/>
  })

  return (
    <div className={`${styles.posts} box`}>
      <h2 className={`${styles.posts__title} h2`}>My posts</h2>
      <div className={styles.posts__inner}>
        <textarea className={`${styles.posts__textarea} textarea`} placeholder="Add posts:"></textarea>
        <button className={`${styles.posts__btn} btn display-36`}>Add post</button>
      </div>
      <div className={styles.posts__list}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts
