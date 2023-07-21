const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 0,
          postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat.',
          likesCount: 4,
          disLikesCount: 0,
        },
        {
          id: 1,
          postText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat.',
          likesCount: 10,
          disLikesCount: 1,
        },
        {
          id: 1,
          postText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat.',
          likesCount: 10,
          disLikesCount: 1,
        },
        {
          id: 1,
          postText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat.',
          likesCount: 10,
          disLikesCount: 1,
        },
        {
          id: 1,
          postText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat.',
          likesCount: 10,
          disLikesCount: 1,
        },
        {
          id: 1,
          postText:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat.',
          likesCount: 10,
          disLikesCount: 1,
        },
      ],
      newPostText: String,
    },
    dialogsPage: {
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
    },
  },

  _callSubscriber() {
    console.log('state change')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        postText: this._state.profilePage.newPostText,
        likesCount: 0,
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.postText
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.message
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 0,
        message: this._state.dialogsPage.newMessageBody,
      }
      this._state.dialogsPage.messagesData.push(newMessage)
      this._state.dialogsPage.newMessageBody = ''
    }
    this._callSubscriber(this.getState())
  },
}

export const onAddPostActionCreator = () => {
  return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (postTextArea) => {
  return { type: UPDATE_NEW_POST_TEXT, postText: postTextArea }
}

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, message: body }
}

export const onSendMessageActionCreator = () => {
  return { type: SEND_MESSAGE }
}

window.store = store

export default store
