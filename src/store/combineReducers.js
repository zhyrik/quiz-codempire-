import { combineReducers } from 'redux'
import { reducer as form} from 'redux-form'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counter from './ducks/counter'
import quizFrom from './reducers/quizForm.reducers'

// redux-persist config
const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['form']
}

const rootReducer = combineReducers({
  counter,
  quizFrom,
  form
})

export default persistReducer(rootPersistConfig, rootReducer)