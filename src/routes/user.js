const express = require("express");
const userSchema = require("../models/user");
const { set } = require("mongoose");

const router = express.Router();



// crear usuario

router.post("/user", (req,res) => {
const user = userSchema(req.body);  //creamos un usuario con el esquema  con los datos que llegan a la peticion //body trae los datos del usuario recien
    user 
    .save()  // con los datos que llegan a la peticion lo guardamos en la base de datos
    .then((data) => res.json(data)) //sale bien la conexion respondemos con los datos
    .catch((error)=> res.json({message:error})); //si no sale se muestra un mje de error
});

//obtener todos los usuarios
router.get("/user", (req,res) => {
    userSchema 
        .find()  //encontrar los usuarios desde el objeto schema
        .then((data) => res.json(data)) //sale bien la conexion respondemos con los datos
        .catch((error)=> res.json({message:error})); //si no sale se muestra un mje de error
    });

    //obtener un usuario con el id
    router.get("/user/:id", (req,res) => {
        const {id} = req.params;
        userSchema 
            .findById(id)  //encontrar los usuarios desde el objeto schema
            .then((data) => res.json(data)) //sale bien la conexion respondemos con los datos
            .catch((error)=> res.json({message:error})); //si no sale se muestra un mje de error
        });

        //actualizar datos del usuario
        router.put("/user/:id", (req,res) => {
            const { id } = req.params;
            const {nombre,edad,email} = req.body; //extraemos los datos para actualizar del usuario
            userSchema 
                .updateOne({_id: id}, { $set: {nombre,edad,email}})  //sabemos cual usuario vamos a actualizar por el id 
                .then((data) => res.json(data)) //sale bien la conexion respondemos con los datos
                .catch((error)=> res.json({message:error})); //si no sale se muestra un mje de error
            });

            // borrar datos
            router.delete("/user/:id", (req,res) => {
                const { id } = req.params;
                userSchema 
                    .deleteOne({_id: id})
                    .then((data) => res.json(data)) //sale bien la conexion respondemos con los datos
                    .catch((error)=> res.json({message:error})); //si no sale se muestra un mje de error
                });


userSchema.upDateOne


module.exports = router;