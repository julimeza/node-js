const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");   //importamos 

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use('/api', userRoutes ); //agregamos usando middleware


//rutas
//req peticion
//res respuesta

app.get('/',(req,res) => {
res.send("bienvenidos a mi API REST");
});

// conexion mongodb
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("conectado a mongoDB")) //then return promesa si se realiza la conexion
.catch((error)=> console.error(error));         // catch tratar un error


app.listen(port, ()=> console.log('servidor escuchando en el puerto',port))