import request from 'superagent'
import { deleteTask } from '../apis/todos'

export const GET_TASKS = 'GET_TASKS'
export const ADD_TASK = 'ADD_TASKS'
export const UPDATE_TASK = 'UPDATE_TASKS'
export const DELETE_TASKS = 'DELETE_TASKS'
export const REQUEST_TASKS = 'REQUEST_TASKS'

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
  return (dispatch) => {
    updateTask(task)
    .then(() => {
      dispatch({
        type: UPDATE_TASK,
        tasks: task
      }) 
    })
  }
}

export const deleteTasks = (task) => {
  return (dispatch) => { //start with return so that it would return the following promise
    deleteTask(task) // callingto API to delete from db
    .then(() => { // actions must be plain objects so use dispatch instead of return
      dispatch({
        type: DELETE_TASKS,
        tasks: task
      }) 
    })
  }
}

export function fetchTasks () {
    return (dispatch) => {
      dispatch(requestTasks()) // put loading acreen here
      return request
        .get(`/api/v1/todos`)
        .then(res => {
          dispatch(receiveTasks(res.body))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  