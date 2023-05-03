const express = require("express")
const dotenv = require("dotenv")
const routerMovie = require("./src/api/routes/movie.routes") // Terminar esta linea
dotenv.config();
const {connect} = require("./src/utils/db")

const app = express()
const PORT = process.env.PORT
connect()
app.use(express.json())

app.use("/movie", routerMovie)

app.listen(PORT, ()=>{
    console.log(`Server URL: http://localhost:${PORT}`)
})