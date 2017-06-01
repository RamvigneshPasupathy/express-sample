const express = require('express')
const path = require('path')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/login', function (req, res) {
  let name = req.query.name
  let password = req.query.password
  console.log('name: ', name)
  console.log('password: ', password)
  if(name == 'ram' && password == '123') {
    console.log('Login Success')
    res.send('Login Success')
  } else {
    console.log('Login Failed')
    res.send('Login Failed')
  }
})

app.listen(8080, function () {
  console.log('Application Started')
})
