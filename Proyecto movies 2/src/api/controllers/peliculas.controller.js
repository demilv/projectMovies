const Pelicula = require("../models/peliculas.model");

//Devolver las pelis
const getAllPeliculas = async(req, res) =>{
    try{
        const allPeliculas = await Pelicula.find(); 
        return res.json(allPeliculas)
    }catch(error){
        console.log(error);
    }
};

//Añadir nueva pelicula
const setNewPelicula = async(req, res) => {
    try{
        const newPelicula = new Pelicula(req.body);
        const createdPelicula = await newPelicula.save();
        return res.status(200).json(createdPelicula);        
        
    }catch(error) {
        return res.status(500).json(error)
    }
}

//Updateo de pelicula
const updatePelicula = async(req, res) =>{
    try{
        const {id} = req.params
        const putPelicula = new Pelicula(req.body)
        putPelicula._id = id;
        const updatePeli = await  Pelicula.findByIdAndUpdate(id, putPelicula, {new: true});
        return res.status(200).json(updatePeli)
    }catch (error){
        return res.status(500).json(error)

    }
}

//Deleteo de pelicula
const deletePelicula = async(req, res) =>{
    try {
        const {id} = req.params
        const deletePeli = await Pelicula.findByIdAndDelete(id);
        if(!deletePeli){
            return res.status(404).json({message: "Pelicula no encontrada"})
        }
        return res.status(200).json(deletePeli)
    }catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllPeliculas, setNewPelicula, updatePelicula, deletePelicula};