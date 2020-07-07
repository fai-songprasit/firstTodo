import {GET_TASKS, UPDATE_TASK, DELETE_TASKS, ADD_TASK} from '../actions'

const initialState = []

function tasks (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return action.tasks
    case ADD_TASK:
      return [...state, action.task]
    case UPDATE_TASK:
      return state.map((task) => {
        if (task.id == action.id) {
          return action.task
        } else {
          return task
        }
      })
    case DELETE_TASKS:
      return state.filter((task) => task.id != action.tasks)
    default:
      return state
  }
}

export default tasks