import axios from 'axios'
import User from './User/User'

function Users(props) {
  if (props.usersData.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      props.setUsers(response.data.items)
      console.log(props)
      let usersElements = props.usersData.map((user) => {
        console.log('usersElements', usersElements)
        return (
          <User
            avatarUrl={user.avatarUrl}
            id={user.id}
            isFollowed={user.isFollowed}
            firstName={user.firstName}
            lastName={user.lastName}
            location={user.location}
            status={user.status}
            onFollow={props.onFollow}
            onUnFollow={props.onUnFollow}
            key={user.id}
          />
        )
      })
      return <section className="section-users box">{usersElements}</section>
    })
  } else {
    let usersElementss = props.usersData.map((user) => {
      return (
        <User
          avatarUrl={user.avatarUrl}
          id={user.id}
          isFollowed={user.isFollowed}
          firstName={user.firstName}
          lastName={user.lastName}
          location={user.location}
          status={user.status}
          onFollow={props.onFollow}
          onUnFollow={props.onUnFollow}
          key={user.id}
        />
      )
    })
    return <section className="section-users box">{usersElementss}</section>
  }
}

export default Users
