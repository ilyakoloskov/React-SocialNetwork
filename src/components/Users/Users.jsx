import axios from 'axios'
import User from './User/User'
import React from 'react'
// function Users(props) {
class Users extends React.Component {
  constructor(props){
    super(props)
  }

    componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setUsersTotalCount(response.data.totalCount)
      })
    }

    onPageChanged = (pageNumber)=> {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
    }

  render() {
    debugger
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return(
      <section className='section-users box'> 
      <div className='pagination'>
        {pages.map(page=> 
        <button 
          onClick={(e)=>{this.onPageChanged(page)}}
          className={this.props.currentPage ===  page && 'pagination__item' || 'pagination__item-selected pagination__item'}
          >{page}</button>)}
      </div>
        <button className='btn'>Show more</button>
        {this.props.usersData.map(user =>           
            <User
                avatarUrl={user.photos.small}
                id={user.id}
                isFollowed={user.isFollowed}
                name={user.name}
                location={user.location}
                status={user.status}
                onFollow={this.props.onFollow}
                onUnFollow={this.props.onUnFollow}
                key={user.id}
            />)}
      </section>
    )
  }

}

export default Users
