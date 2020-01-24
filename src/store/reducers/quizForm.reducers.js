import { action } from '../actions'

const initialState = {
  loading: false,
  fetched: false,
  quiz: [],
  error: null,
  alertFlag: false,
  points: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case action.QUIZ_START: {
    return {
      ...state,
      loading: true
    }
  }

  case action.QUIZ_ERROR:
    return { 
      ...state,
      loading: false,
      error: payload
     }

  case action.QUIZ_RECIVE:
    return {
      ...state,
      loading: false,
      fetched: true,
      quiz: payload
    }

  case action.QUIZ_RETURN_START:
    return {
      ...state,
      loading: false,
      fetched: false,
      quiz: [],
      error: null
    }

  case action.QUIZ_ALERT_FLAG:
    return {
      ...state,
      alertFlag: !state.alertFlag
    }

  case action.SET_POINTS:
    return {
      ...state,
      points: payload
    }

  default:
    return state
  }
}