require('dotenv').config()

// We need to require the express package that was installed
const express = require('express')

//Startup the express app by invoking the express function
// app is our express app
const app = express()

//React to the requests we get
//get - get the request from browser
//Create a route handler
//req - request object that will have the request
//res - response object used to send a response back to the browser

app.get('/',(req,res) =>{
    res.json({mssg: "Welcome to the app"}) // This is to send a response back to the browser
})

//Listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listening on port' ,process.env.PORT)
})


