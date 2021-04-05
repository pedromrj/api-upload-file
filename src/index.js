require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
});



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use("/files", express.static(path.resolve(__dirname, ".." , "tmp", "uploads")));

app.use(routes);
app.listen(3333);