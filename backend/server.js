// We need to require the express package that was installed
const express = require('express')

//Startup the express app by invoking the express function
// app is our express app
const app = express()

//Listen for requests
app.listen(4000, () =>{
    console.log('listening on port 4000')
})
