import styles from './Player.module.sass'

function Player() {
  return (
    <div className="player-scroll">
      <div className="player-scroll__wrapper container">
        <div className="player__controls">
          <div className="player__btn">
            <img className="player__btn-icon" src="/icons/prev.svg" alt="" />
          </div>
          <div className="player__btn">
            <img className="player__btn-icon" src="/icons/play.svg" alt="" />
          </div>
          {/* <div className="player__btn">
            <img className="player__btn-icon" src="/icons/pause.svg" alt="" />
          </div> */}
          <div className="player__btn">
            <img className="player__btn-icon" src="/icons/next.svg" alt="" />
          </div>
        </div>
        <img className="player__cover" src="/images/profile.jpg" alt="" />
        <div className="player__currents">
          <span className="player__start">00:00</span>
          <div className="player__duration"></div>
          <span className="player__end">02:38</span>
        </div>
        <div className="player__volume">
          <input type="range" name="" id="" />
        </div>
      </div>
    </div>
  )
}

export default Player
