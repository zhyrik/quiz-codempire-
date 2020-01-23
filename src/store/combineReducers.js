import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import counter from './ducks/counter'
import quizFrom from './reducers/quizForm.reducers'

export default  combineReducers({
  counter,
  quizFrom,
  form: formReducer
})