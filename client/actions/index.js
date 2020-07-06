import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const GET_TASKS = 'GET_TASKS'
export const ADD_TASKS = 'ADD_TASKS'
export const UPDATE_TASKS = 'UPDATE_TASKS'
export const DELETE_TASKS = 'DELETE_TASKS'
export const REQUEST_TASKS = 'REQUEST_TASKS'

import { getTasks } from '../apis/todos'

export const requestTasks = () => {
  return {
    type: REQUEST_TASKS
  }
}

export const receiveTasks = (task) => {
  return {
    type: GET_TASKS,
    tasks: task
  }
}

export function addTask(task) {
    return {
      type: ADD_TASK,
      task: task
    }
  }

export const updateTasks = (task) => {
    return {
      type: UPDATE_TASKS,
      tasks: task
    }
}

export const deleteTasks = (task) => {
    return {
      type: DELETE_TASKS,
      tasks: task
    }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchTasks () {
    return (dispatch) => {
      dispatch(receiveTasks())
      return request
        .get(`/api/v1/todos`)
        .then(res => {
          dispatch(getTasks(res.body))
        })
        .catch(err => {
          dispatch(showError(err.message))
        })
    }
  }
  