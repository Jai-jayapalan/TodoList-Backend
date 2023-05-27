const express = require('express');
const route = express.Router()

const getAllToDoItems=(req,res)=>{
    res.send('List of all items')
}

const createNewToDoItems=(req,res)=>{
    // res.send('Creating new ToDo items')
    res.send(req.body)
}

module.exports={getAllToDoItems,createNewToDoItems};