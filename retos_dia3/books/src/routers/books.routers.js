const { Router } = require('express');
const router = Router();
const { getBookById, getBooks, addBook, updateBookById, deleteBookById } = require('../controller/books.controller');

router.get('/books/:id_book', getBookById);

router.get('/books', getBooks);

router.post('/books', addBook);

router.put('/books/:id_book', updateBookById);

router.delete('/books/:id_book', deleteBookById);

module.exports = router;
