const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema de cines

const cinemasSchema = new Schema({
    name: {type:String, require: true},
    location: {type:String, require: true},
    peliculas:[{type: Schema.Types.ObjectId, ref: "peliculas"}]
    }, {
        collection: "cinemas",
    }
);

const Cinema = mongoose.model("cinemas", cinemasSchema);
module.exports = Cinema;