const express = require('express')

const app = express()
require('./db/mongoose')



const userRouter = require ('./routers/user')
const taskRouter = require('./routers/task')

const port = process.env.PORT 


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
const jwt = require('jsonwebtoken')


const myFunc = async () => {
    const token = jwt.sign({_id:'abc123'}, 'thisismynewcourse', {expiresIn:'0 seconds'})

    const data = jwt.verify(token,'thisismynewcourse')
    console.log(data)
}

myFunc()

app.listen(port, () => {
console.log('Server is up on port ' + port)
})


/*
  app.post('/upload', upload.single('upload'), (req,res) => {
      res.send()
  }, (error,req,res,next) => {
       res.status(400).send({error:error.message})
  }
  )*/