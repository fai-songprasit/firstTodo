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
      .then((id) => {
        res.send({id: id[0]})
        // return db.getTasks()
      })
      // .then(task => {
      //   res.send(task)
      // })
})

router.put('/:id', (req,res) => {
    const task = req.body
    const id = req.params.id
    db.updateTask(task, id)
      .then(() => {
        console.log(id)
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