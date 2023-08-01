import Users from './Users'
import { followActionCreator, unFollowActionCreator, setUsersActionCreator } from '../../store/usersReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  debugger
  return {
    usersData: state.usersPage.usersData,
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
  }
}

 

export default connect(mapStateToProps, mapDispatchToProps)(Users)
