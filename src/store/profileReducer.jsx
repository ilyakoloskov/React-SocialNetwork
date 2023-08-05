const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [...state.postsData, { id: 5, postText: state.newPostText, likesCount: 0 }],
        newPostText: '',
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.postText,
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
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

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile }
}

export default profileReducer
