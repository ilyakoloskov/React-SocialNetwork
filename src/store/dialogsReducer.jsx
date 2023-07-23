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
      id: 0,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?',
    },
    {
      id: 0,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?',
    },
    {
      id: 0,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?',
    },
    {
      id: 0,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?',
    },
    {
      id: 0,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?',
    },
    {
      id: 1,
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam.',
    },
  ],
  newMessageBody: String,
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 0,
        message: state.newMessageBody,
      }
      let stateCopy = { ...state }
      stateCopy.messagesData = [...state.messagesData]
      // console.log(stateCopy)
      stateCopy.messagesData.push(newMessage)
      stateCopy.newMessageBody = ''
      return stateCopy
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state }
      stateCopy.newMessageBody = action.message
      return stateCopy
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
