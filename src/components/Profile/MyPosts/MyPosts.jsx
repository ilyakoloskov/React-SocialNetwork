import Post from './Post/Post'
import styles from './MyPosts.module.sass'

function MyPosts() {

  let postsData = [
    {id: 0, postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat.', likesCount: 4, disLikesCount: 0},
    {id: 1, postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat.', likesCount: 10, disLikesCount: 1},
  ]
  
  return (
    <div className={`${styles.posts} box`}>
      <h2 className={`${styles.posts__title} h2`}>My posts</h2>
      <div className={styles.posts__inner}>
        <textarea className={`${styles.posts__textarea} textarea`} placeholder="Add posts:"></textarea>
        <button className={`${styles.posts__btn} btn display-36`}>Add post</button>
      </div>
      <div className={styles.posts__list}>
        <Post messages={postsData[0].postText} likesCount={postsData[0].likesCount} disLikesCount={postsData[0].disLikesCount}/>
        <Post messages={postsData[1].postText} likesCount={postsData[1].likesCount} disLikesCount={postsData[1].disLikesCount}/>
      </div>
    </div>
  )
}

export default MyPosts
