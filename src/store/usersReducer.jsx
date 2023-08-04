const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const IS_FETCHING = 'IS_FETCHING'


let initialState = {
  usersData: [],
  pageSize: 5 ,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, isFollowed: true }
          }
          return user
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, isFollowed: false }
          }
          return user
        }),
      }
    case SET_USERS: {
      console.log('SET_USERS IN REDUCER', action.usersData)
      return {
        ...state,
         usersData: action.usersData,
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state, currentPage: action.currentPage
      }
    }
    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state, totalUsersCount: action.totalUsersCount
      }
    }
    case IS_FETCHING: {
      return{
        ...state, isFetching: action.isFetching
      }
    }
    default: {
      return state
    }
  }
}

export const followActionCreator = (userId) => {
  return { type: FOLLOW, userId }
}

export const unFollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId }
}

export const setCurrentPageActionCreator = (currentPage)=> {
  return {type: SET_CURRENT_PAGE, currentPage}
}

export const setUsersActionCreator = (usersData) => {
  return {
    type: SET_USERS,
    usersData,
  }
}

export const setUsersTotalCountActionCreator = (totalUsersCount) => {
  return {
    type: SET_USERS_TOTAL_COUNT,
    totalUsersCount,
  }
}

export const setIsFetchingActionCreator = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching
  }
}

export default usersReducer
