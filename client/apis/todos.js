import request from 'superagent'

const todosUrl = '/api/v1/todos/'

export function getTasks () {
  return request
    .get(todosUrl)
    .then(response => response.body)
}

export function getTask (task) {
  return request
    .get(todosUrl)
    .send(task)
    .then(response => response.body)
}

export function saveTask(todos) {
  return request
    .post(todosUrl)
    .send(todos)
    .then(response => response.body)
}

export function updateTask(todos, id) {
  return request
    .put(todosUrl + id)
    .send(todos)
    .then(response => response.body)
}

//id passed from delete
export function deleteTask(id) {
  return request
    .del(todosUrl + id)
    .send({id})
    .then(response => response.body)
}