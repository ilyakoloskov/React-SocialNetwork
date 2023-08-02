import Users from './Users'
import { followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator } from '../../store/usersReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage. currentPage
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
    }
  }
}

 

export default connect(mapStateToProps, mapDispatchToProps)(Users)
