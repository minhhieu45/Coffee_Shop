const express = require('express');

const route = express.Router();

route.get('/', async (req, res, next) =>{
    res.render('home');
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


module.exports = route;