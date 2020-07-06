import {GET_TASKS, UPDATE_TASK, DELETE_TASK, ADD_TASK} from '../actions'

const initialState = []

function tasks (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return action.task
    case ADD_TASK:
        return [...state, action.task]
    case UPDATE_TASK:
        return [...state, action.task]
    case DELETE_TASK:
        return state.filter((task) => task !== action.task)
    default:
      return state
  }
}

export default tasks