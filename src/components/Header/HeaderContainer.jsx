import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setUserDataActionCreator } from '../../store/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data
          this.props.setUserDataActionCreator(id, email, login)
        } else {
          console.log('Login please')
        }
      })
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToProps, {
  setUserDataActionCreator,
})(HeaderContainer)
