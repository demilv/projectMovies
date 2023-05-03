const Cinema = require("../models/cinemas.model");

//Devuelve las salas de cine
const getAllCines = async(req, res) =>{
    try{
        const allCines = await Cinema.find();
        return res.json(allCines)
    }catch(error){
        console.log(error);
    }
};

//Añadir nuevo cine
const setNewCine = async(req, res) => {
    try{
        const newCine = new Cinema(req.body);
        const createdCine = await newCine.save();
        return res.status(200).json(createdCine);        
        
    }catch(error) {
        return res.status(500).json(error)
    }
}
//Updateo del cine
const updateCine = async(req, res) =>{
    try{
        const {id} = req.params
        // console.log(id)
        const updateCine = new Cinema(req.body)
        updateCine._id = id;
        const updateCin = await Cinema.findByIdAndUpdate(id, updateCine, {new: true});
        return res.status(200).json(updateCin)
    }catch (error){
        return res.status(500).json(error)

    }
}
//Deleteo del cine
const deleteCine = async(req, res) =>{
    try {
        const {id} = req.params
        const deleteCin = await Cinema.findByIdAndDelete(id);
        if(!deleteCin){
            return res.status(404).json({message: "Cine no encontrado"})
        }
        return res.status(200).json(deleteCin)
    }catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllCines, setNewCine, updateCine, deleteCine};