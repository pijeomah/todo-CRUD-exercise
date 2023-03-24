//HAndles initial GET request
//Handles POST request for adding tasks
const express = require('express')
const router = require('express').Router()
const homeController = require('../controllers/home')


//add specific routes for specfic tasks
router.get('/', homeController.getIndex)
router.post('/', homeController.createTask)



module.exports = router