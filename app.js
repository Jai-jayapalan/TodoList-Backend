const express = require('express');
const app = express()
const todo_items = require('./Routes/todo_item')

app.get('/',(req,res)=>{
    res.send('Working')
})

app.use('/api/v1/todo_items',todo_items)

app.listen(3000,()=>{
    console.log('Server start at http://localhost:3000')
})