const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  usersData: [
    {
      id: 0,
      isFollowed: true,
      firstName: 'Ilya',
      lastName: 'Koloskov',
      status: 'My status :)',
      location: {
        country: 'Russia',
        city: 'Penza',
    }
    },
    {
        id: 1,
        isFollowed: true,
        firstName: 'Anton',
        lastName: 'Belousov',
        status: 'Ololoololo',
        location: {
            country: 'Russia',
            city: 'Penza',
        }
    },
    {
        id: 2,
        isFollowed: false,
        firstName: 'German',
        lastName: 'Fedotov',
        status: '',
        location: {
            country: 'Russia',
            city: 'Moscow',
        }
    },
    {
        id: 3,
        isFollowed: true,
        firstName: 'Dmitriy',
        lastName: 'Alegin',
        status: 'XD',
        location: {
            country: 'Russia',
            city: 'Novgorod',
        }
    },
  ],
  newPostText: String,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: 
        return
    case UNFOLLOW: 
        return
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

export default usersReducer
