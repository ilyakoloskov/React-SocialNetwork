import User from './User/User'
import React from 'react'

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <>
      <div className="pagination">
        {pages.map((page) => (
          <button
            onClick={() => {
              props.onPageChanged(page)
            }}
            className={
              (props.currentPage === page && 'pagination__item-selected pagination__item') ||
              'pagination__item '
            }
          >
            {page}
          </button>
        ))}
      </div>
      <button className="btn">Show more</button>
      {props.usersData.map((user) => (
        <User
          avatarUrl={user.photos.small}
          id={user.id}
          isFollowed={user.isFollowed}
          name={user.name}
          location={user.location}
          status={user.status}
          key={user.id}
          follow={props.follow}
          unFollow={props.unFollow}
        />
      ))}
    </>
  )
}

export default Users
