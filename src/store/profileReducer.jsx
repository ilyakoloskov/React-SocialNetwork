const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        postText: state.newPostText,
        likesCount: 0,
      }
      let stateCopy = { ...state }
      stateCopy.postsData = [...state.postsData]
      stateCopy.postsData.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state }
      stateCopy.newPostText = action.postText
      return stateCopy
    }
    default: {
      let stateCopy = { ...state }
      return stateCopy
    }
  }
}

export const addPostActionCreator = () => {
  return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (postTextArea) => {
  return { type: UPDATE_NEW_POST_TEXT, postText: postTextArea }
}

export default profileReducer
