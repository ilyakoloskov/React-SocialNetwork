import User from './User/User'

function Users(props) {
  let usersElements = props.usersData.map((user) => {
    if (props.usersData.length === 0) {
      props.setUsers([
        {
          id: 0,
          avatarUrl:
            'https://i2-prod.irishmirror.ie/incoming/article30555281.ece/ALTERNATES/n615/1_2023-Sports-Illustrated-Swimsuit-Issue-Launch.jpg',
          isFollowed: true,
          firstName: 'Ilya',
          lastName: 'Koloskov',
          status: 'My status :)',
          location: {
            country: 'Russia',
            city: 'Penza',
          },
        },
        {
          id: 1,
          avatarUrl:
            'https://i2-prod.irishmirror.ie/incoming/article30555281.ece/ALTERNATES/n615/1_2023-Sports-Illustrated-Swimsuit-Issue-Launch.jpg',
          isFollowed: true,
          firstName: 'Anton',
          lastName: 'Belousov',
          status: 'Ololoololo',
          location: {
            country: 'Russia',
            city: 'Penza',
          },
        },
        {
          id: 2,
          avatarUrl:
            'https://i2-prod.irishmirror.ie/incoming/article30555281.ece/ALTERNATES/n615/1_2023-Sports-Illustrated-Swimsuit-Issue-Launch.jpg',
          isFollowed: false,
          firstName: 'German',
          lastName: 'Fedotov',
          status: '',
          location: {
            country: 'Russia',
            city: 'Moscow',
          },
        },
        {
          id: 3,
          avatarUrl:
            'https://i2-prod.irishmirror.ie/incoming/article30555281.ece/ALTERNATES/n615/1_2023-Sports-Illustrated-Swimsuit-Issue-Launch.jpg',
          isFollowed: true,
          firstName: 'Dmitriy',
          lastName: 'Alegin',
          status: 'XD',
          location: {
            country: 'Russia',
            city: 'Novgorod',
          },
        },
      ])
    }

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
}

export default Users
