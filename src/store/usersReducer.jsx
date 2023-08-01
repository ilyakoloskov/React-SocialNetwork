const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  usersData: [
    // {
    //   id: 0,
    //   avatarUrl:
    //     'https://i2-prod.irishmirror.ie/incoming/article30555281.ece/ALTERNATES/n615/1_2023-Sports-Illustrated-Swimsuit-Issue-Launch.jpg',
    //   isFollowed: true,
    //   firstName: 'Ilya',
    //   lastName: 'Koloskov',
    //   status: 'My status :)',
    //   location: {
    //     country: 'Russia',
    //     city: 'Penza',
    //   },
    // },
    // {
    //   id: 1,
    //   avatarUrl:
    //     'https://i2-prod.irishmirror.ie/incoming/article30555281.ece/ALTERNATES/n615/1_2023-Sports-Illustrated-Swimsuit-Issue-Launch.jpg',
    //   isFollowed: true,
    //   firstName: 'Anton',
    //   lastName: 'Belousov',
    //   status: 'Ololoololo',
    //   location: {
    //     country: 'Russia',
    //     city: 'Penza',
    //   },
    // },
    // {
    //   id: 2,
    //   avatarUrl:
    //     'https://i2-prod.irishmirror.ie/incoming/article30555281.ece/ALTERNATES/n615/1_2023-Sports-Illustrated-Swimsuit-Issue-Launch.jpg',
    //   isFollowed: false,
    //   firstName: 'German',
    //   lastName: 'Fedotov',
    //   status: '',
    //   location: {
    //     country: 'Russia',
    //     city: 'Moscow',
    //   },
    // },
    // {
    //   id: 3,
    //   avatarUrl:
    //     'https://i2-prod.irishmirror.ie/incoming/article30555281.ece/ALTERNATES/n615/1_2023-Sports-Illustrated-Swimsuit-Issue-Launch.jpg',
    //   isFollowed: true,
    //   firstName: 'Dmitriy',
    //   lastName: 'Alegin',
    //   status: 'XD',
    //   location: {
    //     country: 'Russia',
    //     city: 'Novgorod',
    //   },
    // },
  ],
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
        usersData: [...state.usersData, ...action.usersData],
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

export const setUsersActionCreator = (usersData) => {
  return {
    type: SET_USERS,
    usersData,
  }
}

export default usersReducer
