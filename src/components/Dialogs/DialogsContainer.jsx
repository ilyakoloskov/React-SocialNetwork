import { connect } from 'react-redux'
import { updateNewMessageBodyCreator, onSendMessageActionCreator } from '../../store/dialogsReducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (value) => {
      dispatch(updateNewMessageBodyCreator(value))
    },
    sendMessage: () => {
      dispatch(onSendMessageActionCreator())
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
