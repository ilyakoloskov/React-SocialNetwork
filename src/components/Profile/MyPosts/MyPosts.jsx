import Post from './Post/Post'
import styles from './MyPosts.module.sass'

function MyPosts() {
  console.log(`${styles.posts} qwe`)
  return (
    <div className={`${styles.posts} box`}>
      <h2 className={styles.posts__title}>My posts</h2>
      <div className={styles.posts__inner}>
        <textarea className={styles.posts__textarea} placeholder="Add posts:"></textarea>
        <button className={`${styles.posts__btn} btn`}>Add post</button>
      </div>
      <div className={styles.posts__list}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts
