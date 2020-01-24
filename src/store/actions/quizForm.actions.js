import Axios from 'axios'

import { action } from '.'

export const handleError = (payload) => ({
  type: action.QUIZ_ERROR,
  payload
})

export const start = () => ({
  type: action.QUIZ_START
})

export const recive = (payload) => ({
  type: action.QUIZ_RECIVE,
  payload
})

export const getQuizs = () => dispatch => {
  dispatch(start())

  Axios.get('http://localhost:3004/quiz')
    .then(res => {
      if (res.statusText === 'OK') {
        dispatch(recive(res.data))
      }
    })
    .catch(err => dispatch(handleError(err.message)))
}

// return to start initialState
export const returnStart = () => ({
  type: action.QUIZ_RETURN_START
})

export const changeAlertFlag = () => ({
  type: action.QUIZ_ALERT_FLAG
})

export const setPoints = (payload) => ({
  type: action.SET_POINTS,
  payload
})