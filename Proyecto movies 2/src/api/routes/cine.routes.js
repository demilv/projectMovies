const express = require("express");
const router = express.Router();

const  {getAllCines, setNewCine, updateCine, deleteCine} = require("../controllers/cinemas.controller")

//Listado de rutas de cines

router.get("/", getAllCines)

router.post("/", setNewCine)

router.put("/:id", updateCine)

router.delete("/:id", deleteCine)

module.exports = router;