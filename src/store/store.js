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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        postText: this._state.profilePage.newPostText,
        likesCount: 0,
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = ''
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.postText
    }
    this._callSubscriber(this.getState())
  },
}

window.store = store

export default store
