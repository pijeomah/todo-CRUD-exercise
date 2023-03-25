
//These routes will handle editing and deleting as well as rendering the edit page
const express = require('express')
const router = require('express').Router()
const editController = require('../controllers/edit')

router.post('/:id', editController.updateTask)
router.get('/remove/:id', editController.deleteTask)
router.get('/:id', editController.getEdit)
module.exports = router