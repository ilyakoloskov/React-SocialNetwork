import './User.sass'
import userPhoto from '../../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function User(props) {
  console.log(props)
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
      {props.followed ? (
        <button
          className="user__unfollow btn"
          onClick={() => {
            axios
              .delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                withCredentials: true,
                headers: {
                  'API-KEY': 'a0a10984-20e1-4541-ac07-f6f06c5c5049',
                },
              })
              .then((response) => {
                if (response.data.resultCode === 0) {
                  props.unFollow(props.id)
                }
              })
          }}
        >
          отписаться
        </button>
      ) : (
        <button
          className="user__follow btn"
          onClick={() =>
            axios
              .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {},
                {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'a0a10984-20e1-4541-ac07-f6f06c5c5049',
                  },
                }
              )
              .then((response) => {
                console.log(response.data)
                if (response.data.resultCode === 0) {
                  props.follow(props.id)
                }
              })
          }
        >
          Подписаться
        </button>
      )}
    </div>
  )
}

export default User
