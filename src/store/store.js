import profileReducer from './profileReducer'
import playerReducer from './playerReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

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
    sidebar: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._state.player = playerReducer(this._state.player, action)

    this._callSubscriber(this.getState())
  },
}

window.store = store

export default store
