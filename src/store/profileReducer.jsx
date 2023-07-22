const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        postText: state.newPostText,
        likesCount: 0,
      }
      state.postsData.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.postText
      return state
    default:
      return state
  }
}

export const onAddPostActionCreator = () => {
  return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (postTextArea) => {
  return { type: UPDATE_NEW_POST_TEXT, postText: postTextArea }
}

export default profileReducer
