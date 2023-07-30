import Users from './Users'
import { followActionCreator, unFollowActionCreator, setUsers } from '../../store/usersReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (id) => {
      dispatch(followActionCreator(id))
    },
    onUnFollow: (id) => {
      dispatch(unFollowActionCreator(id))
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    },
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
