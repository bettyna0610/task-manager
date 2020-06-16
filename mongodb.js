/*const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const ObjectID = mongodb.ObjectID*/

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//const id = new ObjectID()



MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error,client) => {
if(error) {
    return console.log('Unable to connect')
}


  const db = client.db(databaseName)

  
  /*

  db.collection('users').findOne({_id: new ObjectID("5ed8bdb55c5898327830e3a3")}, (error, user) => {
     if(error) {
         return console.log('Unable to fetch')
     }

     console.log(user)
  })

  db.collection('users').find({age:27}).toArray((error,users) => {
      console.log(users)
  })

  db.collection('tasks').findOne({_id: new ObjectID("5ed8c4779056c007acdd968f")}, (error,user) => {
      if(error) {
          return console.log('Nooo')
      }

      console.log(user)
  })

  db.collection('tasks').find({completed:false}).toArray((error,users) => {
      console.log(users)
  })
})

  db.collection('users').insertOne({
      name:'Bettina',
      age:29
  }, (error, result) => {
      if(error) {
          return console.log('Unable')
      }

      console.log(result.ops)
  } )
})


db.collection('users').insertMany([{
    name:'Jen',
    age:28
}, {
    name:'Gunther',
    age:27
}], (error,result) => {
   if(error) {
       return console.log('Error')
   }
   console.log(result.ops)
})

db.collection('tasks').insertMany([
    {description:'Go shopping',
completed:true},
{description:'Coding',
completed:true},
{description:'Learning German',
completed:false},

], (error,result) => {
    if(error) {
        return console.log('Error')
    }
   console.log(result.ops)

   

   const updatePromise = db.collection('users').updateOne({
       _id:new ObjectID("5ed8bdb55c5898327830e3a3")
   }, {
       $inc: {
           age:1
       }
   })

   updatePromise.then((result) => {
     console.log(result)
   }).catch((error)=> {
    console.log(error)
   })
   

  const updatePromise = db.collection('tasks').updateMany({
    completed:false
}, {
    $set: {
        completed:true
    }
})

updatePromise.then((result) => {
  console.log(result)
}).catch((error)=> {
 console.log(error)
})
*/

db.collection('tasks').deleteOne({
    description:'Go shopping'
}).then((result) => {
console.log(result)
}).catch((error) => {
console.log(error)
})
})


