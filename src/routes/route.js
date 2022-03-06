const express = require('express');

const router = express.Router();
const bookModel = require('../models/bookModel')
const bookController= require('../controller/bookcontroller')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post('/createBooks', bookController.createBooks );
router.get('/getAllBooks', bookController.getBooksData)
router.get('/book-author-name', bookController.bookList)
router.post('/year-books', bookController.getBooksInYear)
router.post('/get-Particular', bookController.getParticularBooks)
router.get('/get-inr', bookController.getXINRBooks)
router.get('/get-random', bookController.getRandomBooks)
module.exports = router;