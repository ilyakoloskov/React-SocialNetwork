import styles from './Post.module.sass'

function Post(props) {
  return (
    <article className={styles.post}>
      <div className={styles.post__top}>
        <img className={styles.post__avatar} src="/images/profile.jpg" alt="" />
        <div className="post__descr">
            {props.messages}
        </div>
      </div>
      <div className={styles.post__bottom}>
        <div className={styles.post__date}>19 / 04 / 2023</div>

        <div className={styles.post__reaction}>
          <div className="post__like">Like: {props.likesCount} |</div> 
          <div className="post__dislike">Dislike: {props.disLikesCount}</div>
        </div>
      </div>
    </article>
  )
}

export default Post
