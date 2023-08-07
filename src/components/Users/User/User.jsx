import './User.sass'
import userPhoto from '../../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'

function User(props) {
  let onFollow = (userId) => {
    props.follow(userId)
  }
  let onUnFollow = (userId) => {
    props.unFollow(userId)
  }
  return (
    <div className="user">
      <div className="user__firstName">{props.name}</div>
      <div className="user__lastName">{props.lastName}</div>
      <div className="user__status">{props.status}</div>
      <NavLink to={`/profile/${props.id}`}>
        <img
          className="user__avatar"
          src={props.avatarUrl != null ? props.avatarUrl : userPhoto}
          alt=""
        />
      </NavLink>
      {props.isFollowed ? (
        <button className="user__unfollow" onClick={() => onUnFollow(props.id)}>
          отписаться
        </button>
      ) : (
        <button className="user__follow" onClick={() => onFollow(props.id)}>
          Подписаться
        </button>
      )}
    </div>
  )
}

export default User
