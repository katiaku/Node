let { Book } = require('../models/Book');

let book = new Book(
    "Clean Code",
    "Tapa blanda",
    "Robert C. Martin",
    50,
    "https://m.media-amazon.com/images/I/51E2055ZGUL._SY522_.jpg"
);

// let book = null;

function getBook(req, res) {
    let result;
    if (book != null)
        result = { 
            error: false, 
            code: 200, 
            data: book 
        };
    else
        result = { 
            error: true, 
            code: 404, 
            message: 'El libro no existe'
        };
    res.send(result);
}

function addBook(req, res) {
    let result;
    const {title, type, author, price, photo, id_book, id_user} = req.body;
    console.log(req.body);
    if (book == null) {
        book = {
            title: title,
            type: type,
            author: author,
            price: price,
            photo: photo,
            id_book: id_book,
            id_user: id_user
        };
        result = { 
            error: false, 
            code: 200, 
            message: 'Libro creado',
            data: book
        }
    } else {
        result = { 
            error: true, 
            code: 409, 
            message: 'Libro ya existe'
        }
    };
    res.send(result);
}

function updateBook(req, res) {
    let result;
    const {title, type, author, price, photo, id_book, id_user} = req.body;
    if (book != null) {
        book.title = title;
        book.type = type;
        book.author = author;
        book.price = price;
        book.photo = photo;
        book.id_book = id_book;
        book.id_user = id_user;
        result = {
            error: false, 
            code: 200, 
            message: 'Libro actualizado',
            data: book
        }
    } else {
        result = { 
            error: true, 
            code: 404, 
            message: 'El libro no existe'
        };
    }
    res.send(result);
}

function deleteBook(req, res) {
    let result;
    if (book != null) {
        book = null;
        result = {
            error: false,
            code: 200,
            message: 'Libro borrado',
            data: book
        }
    } else {
        result = {
            error: true,
            code: 404,
            message: 'El libro no existe'
        }
    }
    res.send(result);
}

module.exports = { getBook, addBook, updateBook, deleteBook };
