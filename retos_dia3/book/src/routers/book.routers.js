const { Router } = require('express');
const router = Router();
const { getBook, addBook, updateBook, deleteBook } = require('../controller/book.controller');

router.get('/book', getBook);

router.post('/book', addBook);

router.put('/book', updateBook);

router.delete('/book', deleteBook);

module.exports = router;
