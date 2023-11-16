const { Router } = require('express');
const router = Router();
const { getMovie, getActor, getDirector, getWriter, 
    addMovie, addActor, updateMovie, deleteMovie, createDirector, 
    createWriter, deleteDirector, deleteWriter, getActorById, 
    deleteActorById, updateDirector, updateWriter, 
    updateActorById } = require('../controller/movie.controller');

router.get('/movie', getMovie);

router.get('/movie/actor', getActor);

router.get('/movie/actor/:id', getActorById);

router.get('/movie/director', getDirector);

router.get('/movie/writer', getWriter);

router.post('/movie', addMovie);

router.post('/movie/actor', addActor);

router.post('/movie/director', createDirector);

router.post('/movie/writer', createWriter);

router.put('/movie', updateMovie);

router.put('/movie/actor/:id', updateActorById);

router.put('/movie/director', updateDirector);

router.put('/movie/writer', updateWriter);

router.delete('/movie', deleteMovie);

router.delete('/movie/actor/:id', deleteActorById);

router.delete('/movie/director', deleteDirector);

router.delete('/movie/writer', deleteWriter);

module.exports = router;
