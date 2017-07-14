//yarn init
//yarn add express
const express = require('express')

//running the server
const app = express()

// listening for request, different routes
// yarn add nodemon for server to auto refresh, then change 'yarn start' to nodemon index

// every request will have to go thru this middleware
// app.use(function(req,res,next){
//   console.log('first middleware');
//   next()
// })
//
// app.use(function(req,res){
//   console.log('second middleware');
//
// })

//MIDDLEWARE: all request will have to know that the public folder is where we put our static files, public refers to the public folder
app.use(express.static('public'))


//sendfile looks for files in the public folder
app.get('/', function (req,res){
  res.sendFile('index.html')
})



app.get('/about/:name/:id', function (req,res){
  res.send(req.params)
})

app.get('/faq', function (req,res){
  res.send('hello page')
})


app.listen(3000, function(){
  console.log('express is running on port 3000');
})
