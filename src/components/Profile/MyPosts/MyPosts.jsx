import Post from './Post/Post'
import styles from './MyPosts.module.sass'
import React from 'react'

function MyPosts(props) {
  let postsElements = props.postsData.map((post) => {
    return (
      <Post
        messages={post.postText}
        likesCount={post.likesCount}
        disLikesCount={post.disLikesCount}
      />
    )
  })

  let newPostElement = React.createRef()

  let onAddPost = function () {
    let postTextArea = newPostElement.current.value
    props.addPost(postTextArea)
  }

  let onPostChange = () => {
    let postTextArea = newPostElement.current.value
    props.updateNewPostText(postTextArea)
  }

  return (
    <div className={`${styles.posts} box`}>
      <h2 className={`${styles.posts__title} h2`}>My posts</h2>
      <div className={styles.posts__inner}>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
          className={`${styles.posts__textarea} textarea`}
          placeholder="Add posts:"
        ></textarea>
        <button onClick={onAddPost} className={`${styles.posts__btn} btn display-36`}>
          Add post
        </button>
      </div>
      <div className={styles.posts__list}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
