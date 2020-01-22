import { createSelector } from 'reselect'

// Actions
const action = {
  ADD: 'ADD'
}

// Reducer
const initialState = {
  counter: 11
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case action.ADD:
    return {
      ...state,
      counter: state.counter + payload
    }

  default:
    return state
  }
}

// Action Creators
export const add = num => ({
  type: action.ADD,
  payload: num
})

// side effects
export const actionName = payload => dispatch => {
  setTimeout(() => {
    dispatch(add(payload))
  }, 400)
}

// Selectors
export const counter = state => state.counter.counter

export const counterWithDollar = createSelector(
  counter,
  counter => counter + ' $$'
)