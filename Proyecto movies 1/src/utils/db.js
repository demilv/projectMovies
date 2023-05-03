//Fichero de conexion a la base de datos

const mongoose = require("mongoose");

const db_URL1 = process.env.db_URL1;

const connect = async () =>{    
    try {
        const db = await mongoose.connect(db_URL1, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });

        const {name, host} = db.connection
        console.log(`Base de datos : ${name} y host: ${host}`)
    }catch (error){console.log(error)}
}

module.exports = {connect};