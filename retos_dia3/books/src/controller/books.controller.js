let { Book } = require('../models/Book');

let book1 = new Book(
    "Clean Code",
    "Tapa blanda",
    "Robert C. Martin",
    50,
    "https://m.media-amazon.com/images/I/51E2055ZGUL._SY522_.jpg"
);

let book2 = new Book(
    "Harry Potter and the Sorcerer's Stone",
    "Tapa blanda",
    "J.K. Rowling",
    25,
    "https://m.media-amazon.com/images/I/81Fyh2mrw4L._AC_UF1000,1000_QL80_.jpg",
    5,
    1
);

let books = [book1, book2];

function getBookById(req, res) {
    console.log(req.params);
    let bookId = req.params.id_book;
    let index = books.findIndex((book) => book.id_book == bookId);

    if (index !== -1) {
        res.send({ 
            error: false, 
            code: 200, 
            data: books[index]
        });
    } else {
        res.send({ 
            error: true, 
            code: 404, 
            message: 'El libro no existe'
        });
    }
}

function getBooks(req, res) {
    let result;
    if (books.length !== 0)
        result = { 
            error: false, 
            code: 200, 
            data: books 
        };
    else
        result = { 
            error: true, 
            code: 404, 
            message: 'No hay libros'
        };
    res.send(result);
}

function addBook(req, res) {
    let result;
    const {title, type, author, price, photo, id_book, id_user} = req.body;
    console.log(req.body);
    let newBook = {
        title: title,
        type: type,
        author: author,
        price: price,
        photo: photo,
        id_book: id_book,
        id_user: id_user
    };
    books.push(newBook);
    result = { 
        error: false, 
        code: 200, 
        message: 'Libro añadido',
        data: books
    }
    res.send(result);
}

function updateBookById(req, res) {
    console.log(req.params);
    console.log(req.body);
    let bookId = req.params.id_book;
    let index = books.findIndex((book) => book.id_book == bookId);
    const {title, type, author, price, photo, id_book, id_user} = req.body;

    if (index !== -1) {
        books[index].title = title;
        books[index].type = type;
        books[index].author = author;
        books[index].price = price;
        books[index].photo = photo;
        books[index].id_book = id_book;
        books[index].id_user = id_user;
        res.send({
            error: false, 
            code: 200, 
            message: 'Libro actualizado',
            data: books[index]
        });
    } else {
        res.send({ 
            error: true, 
            code: 404, 
            message: 'El libro no existe'
        });
    }
}

function deleteBookById(req, res) {
    console.log(req.params);
    let bookId = req.params.id_book;
    let index = books.findIndex((book) => book.id_book == bookId);

    if (index !== -1) {
        books.splice(index, 1);
        res.send({ 
            error: false, 
            code: 200, 
            data: books 
        });
    } else {
        res.send({ 
            error: true, 
            code: 404, 
            message: 'El libro no existe'
        });
    }
}

module.exports = { getBookById, getBooks, addBook, updateBookById, deleteBookById };
