const express = require('express')
const auth = require('../middleware/auth')

const Task = require('../models/task')

const router = new express.Router()

router.delete('/task/:id',auth, async (req,res) => {
    try {
      const task = await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
      if (!task) {
        return res.status(404).send()
      }
      res.send(task)
    } catch (e) {
      res.status(500).send()
    }
  
   
  })
  
  router.patch('/task/:id',auth, async(req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates =['completed','description']
    const isValidOperation = updates.every((update) => {
      return allowedUpdates.includes(update)
    })
    if(!isValidOperation) {
      return res.status(400).send({error:'Invalid updates'})
    }
    try {
      const task = await Task.findOne({_id:req.params.id,owner:req.user._id})
      if(!task) {
        return res.status(404).send()
      } 
        updates.forEach((update) => {
            task[update] = req.body[update]
         })
      
         await task.save()
      //const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      
      res.send(task)
    } catch(e) {
       res.status(400).send(e)
    }
    
  })
  
  router.get('/task/:id', auth, async (req,res) => {
  
    const _id= req.params.id
    try {
      //const task = await Task.findById(_id)
      const task = await Task.findOne({_id, owner: req.user_id})
      
        if(!task) {
          return res.status(404).send()
        }
         res.send(task)
    } catch (e) {
      res.status(500).send()
    }
    
  })
  
  router.get('/task', auth, async (req,res) => {
     const match = {
             
     }

     const sort = {}

     if(req.query.sortBy) {
       const parts = req.query.sortBy.split(':')
       sort[parts[0]] = parts[1] === 'desc' ? -1:1
       
     }

     if(req.query.completed) {
       match.completed = req.query.completed ==='true'
     }
    try {
      await req.user.populate({
        path:'tasks',
        match,
        options: {
          limit:parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
      
        }
      }).execPopulate()

      res.send(req.user.tasks)
    } catch (e) {
      res.status(500).send()
    }
    })
    
    
      
   
  
  router.post('/task', auth, async (req,res) => {
    //const task = new Task(req.body)
    const task = new Task({
      ...req.body,
      owner: req.user._id
    })
      try {
        task.save()
        res.send(task)
      } catch(e) {
        res.status(400)
        res.send(e)
      }
   
    
  })

  module.exports = router
  