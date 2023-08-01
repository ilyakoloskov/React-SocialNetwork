import axios from 'axios'
// import { setUsers } from '../../store/usersReducer'
import User from './User/User'

function Users(props) {
  // debugger
  // console.log(props)
  // if (props.usersData.length === 0) {
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
  //     props.setUsers(response.data.items)
  //     console.log(props)
  //     // let usersElements = props.usersData.map((user) => {
  //     //   console.log('usersElements', usersElements)
  //     //   return (
  //     //     <User
  //     //       avatarUrl={user.avatarUrl}
  //     //       id={user.id}
  //     //       isFollowed={user.isFollowed}
  //     //       firstName={user.firstName}
  //     //       lastName={user.lastName}
  //     //       location={user.location}
  //     //       status={user.status}
  //     //       onFollow={props.onFollow}
  //     //       onUnFollow={props.onUnFollow}
  //     //       key={user.id}
  //     //     />
  //     //   )
  //     // })
  //     return <section className="section-users box">{usersElements}</section>
  //   })
  //   // return <section className="section-users box">{usersElementss}</section>
  // }

  if(props.usersData.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
      console.log('response.data.items',response.data.items)
      props.setUsers(response.data.items)
      console.log('props',props)
    })
  }
  debugger
  return (
      
    <section className='section-users box'> 
    {props.usersData.map(user =>           
        <User
            avatarUrl={user.avatarUrl}
            id={user.id}
            isFollowed={user.isFollowed}
            name={user.name}
            location={user.location}
            status={user.status}
            onFollow={props.onFollow}
            onUnFollow={props.onUnFollow}
            key={user.id}
          />)}
    {/* <div className="user">
      <div className="user__firstName">{props.name}</div>
      <div className="user__lastName">{props.lastName}</div>
      <div className="user__status">{props.status}</div>
      <img className="user__avatar" src={props.avatarUrl} alt="" />
      {props.isFollowed ? (
        <button className="user__unfollow" onClick={() => onUnFollow(props.id)}>
          отписаться
        </button>
      ) : (
        <button className="user__follow" onClick={() => onFollow(props.id)}>
          Подписаться
        </button>
      )}
    </div> */}
    </section>
  )
}

export default Users
