const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

let initialState = {
  usersData: [],
  pageSize: 20,
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
            return { ...user, followed: true }
          }
          return user
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        }),
      }
    case SET_USERS: {
      return {
        ...state,
        usersData: action.usersData,
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }
    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }
    }
    case TOOGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }
    default: {
      return state
    }
  }
}

export const follow = (userId) => {
  return { type: FOLLOW, userId }
}

export const unFollow = (userId) => {
  return { type: UNFOLLOW, userId }
}

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage }
}

export const setUsers = (usersData) => {
  return {
    type: SET_USERS,
    usersData,
  }
}

export const setUsersTotalCount = (totalUsersCount) => {
  return {
    type: SET_USERS_TOTAL_COUNT,
    totalUsersCount,
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOOGLE_IS_FETCHING,
    isFetching,
  }
}

export default usersReducer
