import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const GET_TASKS = 'GET_TASKS'
export const ADD_TASK = 'ADD_TASKS'
export const UPDATE_TASK = 'UPDATE_TASKS'
export const DELETE_TASK = 'DELETE_TASKS'
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
      type: UPDATE_TASK,
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
      dispatch(requestTasks())
      return request
        .get(`/api/v1/todos`)
        .then(res => {
          dispatch(receiveTasks(res.body))
        })
        .catch(err => {
          dispatch(showError(err.message))
        })
    }
  }
  