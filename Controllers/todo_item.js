const express = require('express');
const route = express.Router()

const getAllToDoItems=(req,res)=>{
    res.send('List of all items')
}

module.exports={getAllToDoItems};