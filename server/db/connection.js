const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getTasks(db = connection) {
    return db('todos').select()
}
  
function getTask(id, db = connection) {
    return db('todos')
    .where('id', id)
    .first()
}

function saveTask(task, db = connection) {
    return db('todos')
    .insert({
        task: todos.task,
        priority: task.priority,
        completed: task.completed,
    })
}

function updateTask(task, id, db = connection) {
    return db('todos')
    .where('id', id)
    .update(task)
}


function deleteTask(id, db = connection) {
    return db('todos')
    .where('id', id)
    .del()
}

module.exports = {
    getTasks,
    getTask,
    saveTask,
    updateTask,
    deleteTask,
}