const express = require('express');
const Model = require('../models/userModels');

const router = express.Router();

//add
router.get('/add', (req, res) => {
    res.send('response from user add');
});

//getall
router.get('/getall', (req, res) => {
    res.send('response from user getall');
});

//update
router.get('/update', (req, res) => {
    res.send('response from user update');
});

//delete
router.get('/delete', (req, res) => {
    res.send('response from user delete');
});

module.exports = router;