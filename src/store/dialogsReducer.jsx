const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.message
      return state
    case SEND_MESSAGE:
      let newMessage = {
        id: 0,
        message: state.newMessageBody,
      }
      state.messagesData.push(newMessage)
      state.newMessageBody = ''
      return state
    default:
      return state
  }
}

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, message: body }
}

export const onSendMessageActionCreator = () => {
  return { type: SEND_MESSAGE }
}

export default dialogsReducer
