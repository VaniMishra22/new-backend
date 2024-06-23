const express = require('express');

const router = express.Router();

//add
router.get('/add', (req, res) => {
    res.send('response from product add');
});

//getall
router.get('/getall', (req, res) => {
    res.send('response from product getall');
});

//update
router.get('/update', (req, res) => {
    res.send('response from product update');
});

//delete
router.get('/delete', (req, res) => {
    res.send('response from product delete');
});

module.exports = router;