// import { rerenderEntireTree } from '../render'

let rerenderEntireTree = () => {
  console.log('state change')
}

let state = {
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
}

window.state = state

export const addPost = () => {
  let newPost = {
    id: 5,
    postText: state.profilePage.newPostText,
    likesCount: 0,
  }
  state.profilePage.postsData.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state
