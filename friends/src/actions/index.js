import { axiosWithAuth } from '../utils/axiosWithAuth'

export const ADD_FRIEND = 'ADD_FRIEND'
export const ERROR_MSG = 'ERROR_MSG'

export const addFriend = (newFriend) => (dispatch) => {
  axiosWithAuth
    .post('http://localhost:5000/api/friends', newFriend)
    .then(res => {
      console.log('actions: addFriend: axios.post: res.data: ', res.data)
      const refactoredFriend = {
        id: res.data.id,
        name: res.data.name,
        age: res.data.age,
        email: res.data.email
      }
      dispatch({
        type: ADD_FRIEND,
        payload: refactoredFriend
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR_MSG,
        payload: err
      })
    })
}

export const setError = (message) => {
  return({
    type: ERROR_MSG,
    payload: message
  })
}