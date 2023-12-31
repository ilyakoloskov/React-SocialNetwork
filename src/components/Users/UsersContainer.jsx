// import UsersAPIComponent from './UsersAPIComponent'
import Users from './Users'
import axios from 'axios'
import {
  follow,
  unFollow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toggleIsFetching,
} from '../../store/usersReducer'
import { connect } from 'react-redux'
import React from 'react'
import Preloader from '../UI/Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setUsersTotalCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)

    this.props.setCurrentPage(pageNumber)

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <>
        <section className="section-users box">
          {this.props.isFetching ? (
            <Preloader />
          ) : (
            <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              usersData={this.props.usersData}
              follow={this.props.follow}
              unFollow={this.props.unFollow}
            />
          )}
        </section>
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
})(UsersContainer)
