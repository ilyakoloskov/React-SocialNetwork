import User from './User/User'
import React from 'react'


function Users(props){
    console.log('props',props)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
        <section className='section-users box'> 
        <div className='pagination'>
        {pages.map(page=> 
        <button 
            onClick={()=>{props.onPageChanged(page)}}
            className={props.currentPage ===  page && 'pagination__item-selected pagination__item' || 'pagination__item '}
            >{page}</button>)}
        </div>
        <button className='btn'>Show more</button>
        {props.usersData.map(user =>           
            <User
                avatarUrl={user.photos.small}
                id={user.id}
                isFollowed={user.isFollowed}
                name={user.name}
                location={user.location}
                status={user.status}
                onFollow={props.onFollow}
                onUnFollow={props.onUnFollow}
                key={user.id}
            />)}
        </section>
    )
}

export default Users
