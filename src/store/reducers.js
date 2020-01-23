import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import counter from './ducks/counter'

export default  combineReducers({
  counter,
  form: formReducer
})