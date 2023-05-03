const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const peliculaSchema = new Schema(
    {
        title: {type: String, required: true},
        director: {type: String, required: true},
        year: {type: Number, required: true},
        genre: {type: String, required: true}
    },{
        timestamps: true
    }
)

const Pelicula = mongoose.model('pelicula', peliculaSchema);
module.exports = Pelicula;