// import UsersAPIComponent from './UsersAPIComponent'
import Users from './Users'
import axios from 'axios'
import { followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator, setIsFetchingActionCreator,  } from '../../store/usersReducer'
import { connect } from 'react-redux'
import React from 'react'
import preload from '../../assets/gif/preload.gif'

 
class UsersContainer extends React.Component {
  constructor(props){
    super(props)
  }

    componentDidMount() {
      if(this.props.isFetching === false) { 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.setUsersTotalCount(response.data.totalCount)
      })
      }else{
        this.props.setIsFetching(true)
      }
    }

    onPageChanged = (pageNumber)=> {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
    }

  render() {
    return(
      <>
      {this.props.isFetching ? <img src={preload}/> : null}
      <Users 
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        usersData={this.props.usersData}
        />
      </>
    )
  }

}


let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage. currentPage,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    onUnFollow: (userId) => {
      dispatch(unFollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (pageNumber)=> {
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setUsersTotalCount: (totalCount)=> {
      dispatch(setUsersTotalCountActionCreator(totalCount))
    },
    setIsFetching: (isFetching)=> {
      dispatch(setIsFetchingActionCreator(isFetching))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
