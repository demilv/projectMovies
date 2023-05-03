const express = require('express');
const {getPeliculas, getPeliculasId, getPeliculasTitle, getPeliculasGenre, getPeliculas2010} = require('../controllers/movie.controller');
const router = express.Router();

router.get("/", getPeliculas)
router.get("/genre/:genre", getPeliculasGenre)
router.get("/title/:title", getPeliculasTitle)
router.get("/2010", getPeliculas2010)
router.get("/:id", getPeliculasId)


module.exports = router;