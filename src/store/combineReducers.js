import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counter from './ducks/counter'
import quizFrom from './reducers/quizForm.reducers'

// redux-persist config
const rootPersistConfig = {
  key: 'root',
  storage: storage
}

const rootReducer = combineReducers({
  counter,
  quizFrom,
  form: formReducer
})

export default persistReducer(rootPersistConfig, rootReducer)