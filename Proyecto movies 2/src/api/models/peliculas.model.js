const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema de peliculas

const peliculasSchema = new Schema({
    name: {type:String, require: true},
    releaseDate: {type:Date, require: false},
    ratings:  {type:Number, require: false},
    }, {
        collection: "peliculas",
    }
);

const Pelicula = mongoose.model("peliculas", peliculasSchema);
module.exports = Pelicula;