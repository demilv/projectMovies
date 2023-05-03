const Pelicula = require("../models/movie.model");


const getPeliculas = async(req, res) =>{
    try{
        const getPeliculas = await Pelicula.find();
        return res.json(getPeliculas)
    }catch(error){
        console.log(error);
    }
};

const getPeliculasGenre = async(req, res) =>{
    try{
        const {genre} = req.params
        // function quitarAcentos(cadena){ 
        //     const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'}; 
        //     return cadena.split('').map( letra => acentos[letra] || letra).join('').toString(); }      
        // genreNoAccent = quitarAcentos(genre)
        const peliGenre = await Pelicula.find({genre: genre})
        return res.status(200).json(peliGenre)

        }catch(error){
        console.log(error)
    }
}

const getPeliculasTitle = async (req,res) =>{
    try{
        const {title} = req.params
        // console.log(req.params)
        // function quitarAcentos(cadena){ 
        //     const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'}; 
        //     return cadena.split('').map( letra => acentos[letra] || letra).join('').toString(); }  
        // const titleNoAccent = quitarAcentos(title)
        // console.log(titleNoAccent)
        const peliTitle = await Pelicula.find({title: title})
        return res.status(200).json(peliTitle)
    }catch(error){
        console.log(error)
    }
}

const getPeliculas2010 = async(req, res) =>{
    try{
        const pelis2010 = await Pelicula.find({year: {$gt:2010}})
        return res.status(200).json(pelis2010)
    }catch(error){
        console.log(error)
    }
}

const getPeliculasId = async(req, res)=>{
    try{
        const {id} = req.params
        const peliId = await Pelicula.findById(id)
        return res.status(200).json(peliId)
    }catch(error){
        console.log(error)
    }
}



module.exports = {getPeliculas, getPeliculasGenre, getPeliculasId, getPeliculasTitle, getPeliculas2010};