const express = require('express')
const app = express()
const Port = 8080

app.get('/' , (req,res)=>{
    res.send("HELLO INTERNET!!")
})

app.listen(Port , ()=>{
    console.log("SERVIDOR: ONLINE!")
})