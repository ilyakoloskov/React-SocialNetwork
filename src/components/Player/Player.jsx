import styles from './Player.module.sass'

function Player() {
  return (
    <div className={styles.player}>
      <div className={`${styles.player__container} container`}>
        <div className={styles.player__wrapper}>Player</div>
      </div>
    </div>
  )
}

export default Player
