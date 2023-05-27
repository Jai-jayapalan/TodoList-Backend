const express = require('express');
const router = express.Router()
const {getAllToDoItems,createNewToDoItems} = require('../Controllers/todo_item')

router.route('/').get(getAllToDoItems).post(createNewToDoItems)

module.exports=router;