const express = require('express');
const router = express.Router()
const {getAllToDoItems} = require('../Controllers/todo_item')

router.route('/').get(getAllToDoItems)

module.exports=router;