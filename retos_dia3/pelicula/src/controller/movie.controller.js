let { Movie } = require('../models/Movie');
let { Professional } = require('../models/Professional');

let jasonStatham = new Professional(1, "Jason Statham", 54, 180, 178, false, "British", 0, "Actor");
let bradPitt = new Professional(2, "Brad Pitt", 58, 172, 180, false, "American", 1, "Actor");
let benicioDelToro = new Professional(3, "Benicio del Toro", 55, 85, 188, false, "Puerto Rican", 1, "Actor");
let guyRitchieDirector = new Professional(4, "Guy Ritchie", 54, 160, 180, false, "British", 0, "Director");
let guyRitchieWriter = new Professional(4, "Guy Ritchie", 54, 160, 180, false, "British", 0, "Writer");

let movie = new Movie(
    "Snatch",
    2000,
    "United Kingdom",
    "English",
    "Various",
    false,
    "Various",
    "Crime",
    [jasonStatham, bradPitt, benicioDelToro],
    guyRitchieDirector,
    guyRitchieWriter
);

// let movie = null;

function getMovie(req, res) {
    let result;
    if (movie != null)
        result = { 
            error: false, 
            code: 200, 
            data: movie 
        };
    else
        result = { 
            error: true, 
            code: 404, 
            message: 'La película no existe'
        };
    res.send(result);
}

function getActorById(req, res) {
    console.log(req.params);
    let actorId = req.params.id;
    let index = movie.actors.findIndex((actor) => actor.id == actorId);

    if (index !== -1) {
        res.send({ 
            error: false, 
            code: 200, 
            data: movie.actors[index]
        });
    } else {
        res.send({ 
            error: true, 
            code: 404, 
            message: 'El actor no existe'
        });
    }
}

function getActor(req, res) {
    let result;
    if (movie.actors != null)
        result = { 
            error: false, 
            code: 200, 
            data: movie.actors 
        };
    else
        result = { 
            error: true, 
            code: 404, 
            message: 'Actores no existen'
        };
    res.send(result);
}

function getDirector(req, res) {
    let result;
    if (movie.director != null)
        result = { 
            error: false, 
            code: 200, 
            data: movie.director 
        };
    else
        result = { 
            error: true, 
            code: 404, 
            message: 'Director no existe'
        };
    res.send(result);
}

function getWriter(req, res) {
    let result;
    if (movie.writer != null)
        result = { 
            error: false, 
            code: 200, 
            data: movie.writer 
        };
    else
        result = { 
            error: true, 
            code: 404, 
            message: 'Guionista no existe'
        };
    res.send(result);
}

function addMovie(req, res) {
    let result;
    const {title, releaseYear, nationality, language, 
        platform, isMCU, mainCharacterName, genre,
        actors, director, writer} = req.body;
    console.log(req.body);
    if (movie == null) {
        movie = {
            title: title,
            releaseYear: releaseYear,
            nationality: nationality,
            language: language,
            platform: platform,
            isMCU: isMCU,
            mainCharacterName: mainCharacterName,
            genre: genre,
            actors: actors,
            director: director,
            writer: writer
        };
        result = { 
            error: false, 
            code: 200, 
            message: 'Película creada',
            data: movie
        }
    } else {
        result = { 
            error: true, 
            code: 409, 
            message: 'Película ya existe'
        }
    };
    res.send(result);
}

function addActor(req, res) {
    let result;
    let newActor = req.body;
    console.log(req.body);
    movie.actors.push(newActor);
    result = { 
        error: false, 
        code: 200, 
        message: 'Actor añadido',
        data: movie
    }
    res.send(result);
}

function createDirector(req, res) {
    let result;
    const {director} = req.body;
    console.log(req.body);
    movie.director = director;
    result = { 
        error: false, 
        code: 200, 
        message: 'Director creado',
        data: movie
    }
    res.send(result);
}

function createWriter(req, res) {
    let result;
    const {writer} = req.body;
    console.log(req.body);
    movie.writer = writer;
    result = { 
        error: false, 
        code: 200, 
        message: 'Guionista creado',
        data: movie
    }
    res.send(result);
}

function updateMovie(req, res) {
    let result;
    const {title, releaseYear, nationality, language, 
        platform, isMCU, mainCharacterName, genre,
        actors, director, writer} = req.body;
    if (movie != null) {
        movie.title = title;
        movie.releaseYear = releaseYear;
        movie.nationality = nationality;
        movie.language = language;
        movie.platform = platform;
        movie.isMCU = isMCU;
        movie.mainCharacterName = mainCharacterName;
        movie.genre = genre;
        movie.actors = actors;
        movie.director = director;
        movie.writer = writer;
        result = {
            error: false, 
            code: 200, 
            message: 'Película actualizada',
            data: movie
        }
    } else {
        result = { 
            error: true, 
            code: 404, 
            message: 'La película no existe'
        };
    }
    res.send(result);
}

//TODO update actor
function updateActorById(req, res) {
    let result;
    console.log(req.params);
    console.log(req.body);
    let actorId = req.params.id;
    let index = movie.actors.findIndex((actor) => actor.id == actorId);
    const {id, name, age, weight, height, isRetired,
        nationality, oscarsNumber, profession} = req.body;

        if (movie.actors[index] != null) {
            movie.actors[index].id = id;
            movie.actors[index].name = name;
            movie.actors[index].age = age;
            movie.actors[index].weight = weight;
            movie.actors[index].height = height;
            movie.actors[index].isRetired = isRetired;
            movie.actors[index].nationality = nationality;
            movie.actors[index].oscarsNumber = oscarsNumber;
            movie.actors[index].profession = profession;
            result = {
                error: false, 
                code: 200, 
                message: 'Actor actualizado',
                data: movie
            }
        } else {
            result = { 
                error: true, 
                code: 404, 
                message: 'Actor no existe'
            };
        }
        res.send(result);
}

function updateDirector(req, res) {
    let result;
    const {id, name, age, weight, height, isRetired,
        nationality, oscarsNumber, profession} = req.body;
    if (movie.director != null) {
        movie.director.id = id;
        movie.director.name = name;
        movie.director.age = age;
        movie.director.weight = weight;
        movie.director.height = height;
        movie.director.isRetired = isRetired;
        movie.director.nationality = nationality;
        movie.director.oscarsNumber = oscarsNumber;
        movie.director.profession = profession;
        result = {
            error: false, 
            code: 200, 
            message: 'Director actualizado',
            data: movie
        }
    } else {
        result = { 
            error: true, 
            code: 404, 
            message: 'Director no existe'
        };
    }
    res.send(result);
}

function updateWriter(req, res) {
    let result;
    const {id, name, age, weight, height, isRetired,
        nationality, oscarsNumber, profession} = req.body;
    if (movie.writer != null) {
        movie.writer.id = id;
        movie.writer.name = name;
        movie.writer.age = age;
        movie.writer.weight = weight;
        movie.writer.height = height;
        movie.writer.isRetired = isRetired;
        movie.writer.nationality = nationality;
        movie.writer.oscarsNumber = oscarsNumber;
        movie.writer.profession = profession;
        result = {
            error: false, 
            code: 200, 
            message: 'Guionista actualizado',
            data: movie
        }
    } else {
        result = { 
            error: true, 
            code: 404, 
            message: 'Guionista no existe'
        };
    }
    res.send(result);
}

function deleteMovie(req, res) {
    let result;
    if (movie != null) {
        movie = null;
        result = {
            error: false,
            code: 200,
            message: 'Película borrada',
            data: movie
        }
    } else {
        result = {
            error: true,
            code: 404,
            message: 'La película no existe'
        }
    }
    res.send(result);
}

function deleteActorById(req, res) {
    console.log(req.params);
    let actorId = req.params.id;
    let index = movie.actors.findIndex((actor) => actor.id == actorId);

    if (index !== -1) {
        movie.actors.splice(index, 1);
        res.send({ 
            error: false, 
            code: 200, 
            data: movie 
        });
    } else {
        res.send({ 
            error: true, 
            code: 404, 
            message: 'El actor no existe'
        });
    }
}

function deleteDirector(req, res) {
    let result;
    if (movie.director != null) {
        movie.director = null;
        result = {
            error: false,
            code: 200,
            message: 'Director borrado',
            data: movie
        }
    } else {
        result = {
            error: true,
            code: 404,
            message: 'Director no existe'
        }
    }
    res.send(result);
}

function deleteWriter(req, res) {
    let result;
    if (movie.writer != null) {
        movie.writer = null;
        result = {
            error: false,
            code: 200,
            message: 'Guionista borrado',
            data: movie
        }
    } else {
        result = {
            error: true,
            code: 404,
            message: 'Guionista no existe'
        }
    }
    res.send(result);
}

module.exports = { getMovie, getActor, getActorById, getDirector, getWriter, 
    addMovie, addActor, createDirector, createWriter, updateMovie, updateActorById, 
    updateDirector, updateWriter, deleteMovie, deleteActorById, deleteDirector, 
    deleteWriter };
