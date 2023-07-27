const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogsData: [
    { id: 0, name: 'Ilya' },
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Anton' },
  ],
  messagesData: [
    {
      id: 0,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?',
    },
    {
      id: 1,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?',
    },
    {
      id: 2,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?',
    },
    {
      id: 3,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?',
    },
  ],
  newMessageBody: String,
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        newMessageBody: '',
        messagesData: [
          ...state.messagesData,
          {
            id: 0,
            message: state.newMessageBody,
          },
        ],
      }
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.message,
      }
    }
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
