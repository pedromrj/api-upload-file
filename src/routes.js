const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");
const Post = require("./models/Post");

routes.get("/posts", async (request, response) => {
    const posts = await Post.find();
    return response.json(posts);
});

routes.delete("/posts/:id", async (request, response) => {
    const post = await Post.findById(request.param.id);

    await post.remove();

    return res.send();
});

routes.post("/posts", multer(multerConfig).single("file") , async (request, response) =>{
    const { originalname: name, size , key, location: url = ""} = req.file;

    const post = await Post.create({
        name,
        size,
        key,
        url,
    });

    return response.json(post).status(201);
});

module.exports = routes;