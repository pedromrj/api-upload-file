const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

routes.post("/posts", multer(multerConfig).single("file") , (request, response) =>{
    console.log();
});

module.exports = routes;