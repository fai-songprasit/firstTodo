import { combineReducers } from 'redux'
import errorMessage from './error-message'
import tasks from './tasks'

export default combineReducers({
  errorMessage,
  tasks,
})
