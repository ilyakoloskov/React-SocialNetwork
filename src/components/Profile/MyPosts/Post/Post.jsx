import styles from './Post.module.sass'

function Post() {
  return (
    <article className={styles.post}>
      <div className={styles.post__top}>
        <img className={styles.post__avatar} src="/images/profile.jpg" alt="" />
        <div className="post__descr">
          Hello, i'm post, Hello, i'm post, Hello, i'm post, Hello, i'm post, Hello, i'm post,
          Hello, i'm post, Hello, i'm post, Hello, i'm post, Hello, i'm post,
        </div>
      </div>
      <div className={styles.post__bottom}>
        <div className={styles.post__date}>19 / 04 / 2023</div>

        <div className={styles.post__reaction}>
          <div className="post__like">Like</div>
          <div className="post__dislike">dislike</div>
        </div>
      </div>
    </article>
  )
}

export default Post
