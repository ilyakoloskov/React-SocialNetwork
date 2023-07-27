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
      return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, { id: 5, postText: state.newPostText, likesCount: 0 }],
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.postText,
      }
    }
    default: {
      return state
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