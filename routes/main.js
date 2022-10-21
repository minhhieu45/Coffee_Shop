const express = require('express');

const route = express.Router();

route.get('/', async (req, res, next) =>{
    const data = req.context;
    console.log(data);
    res.render('home', data);
});
route.get('/blog', async (req, res, next) =>{
    res.render('blog');
});
route.get('/menu', async (req, res, next) =>{
    res.render('menu');
});
route.get('/reservation', async (req, res, next) =>{
    res.render('reservation');
});
route.get('/blog-single', async (req, res, next) =>{
    res.render('blog-single');
});


module.exports = route;