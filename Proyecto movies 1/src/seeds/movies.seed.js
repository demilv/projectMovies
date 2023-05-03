const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pelicula = require('../api/models/movie.model');
dotenv.config();

const arraypeliculas = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];

const db_URL1 = process.env.db_URL1
mongoose.connect(db_URL1)
.then(async () => {
const allPeliculas = await Pelicula.find();
if(allPeliculas.length > 0){
    await Pelicula.collection.drop()
    console.log("Peliculas borradas")
}
})
.catch((error) => console.log(`error borrando peliculas: ${error}`))
.then(async() => {
    const PeliculasMap = arraypeliculas.map(pelicula => new Pelicula(pelicula));
    await Pelicula.insertMany(PeliculasMap);
    console.log("peliculas insertadas")
})
.catch((error) => console.log(`error insertando peliculas: ${error}`))
.finally(()=>mongoose.disconnect());
