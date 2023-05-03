const express = require("express")
const cors = require("cors")
const {connect} = require("./src/utils/database")

//Importe de rutas de las colecciones
const routerMovie = require("./src/api/routes/movie.routes"); 
const routerCine = require("./src/api/routes/cine.routes");

const app = express();
connect(); 
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT

app.use("/movie", routerMovie)
app.use("/cine", routerCine)

app.listen(PORT, () =>{
    console.log(`URL del servidor : http://localhost:${PORT}`)
})

