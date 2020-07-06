const express = require('express')
const router = express.Router()

const db = require('../db/connection')

router.get('/', (req, res) => {
    db.getTasks()
      .then(tasks => {
        res.send(tasks)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  })
  
router.post('/', (req,res) => {
    const task = req.body
    db.saveTask(task)
        .then(() => {
        return db.getTasks()
        })
        .then(task => {
        res.send(task)
        })
})

router.put('/:id', (req,res) => {
    const task = req.body
    const id = req.params.id
    console.log(id, task)
    db.updateTask(id, task)
        .then(() => {
        return db.getTask(id)
        })
        .then(task => {
        res.json(task)
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    db.deleteTask(id)
        .then(() => {
        return db.getTask(id)
        })
        .then(task => {
        res.json(task)
        })
})
  
  module.exports = router