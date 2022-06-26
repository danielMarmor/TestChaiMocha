const { json } = require('express');
const express = require('express');
const path = require('path');
const calc = require('./calculator');

const port = 8081

const app = express();

//app.use(express.static(path.join(__dirname, 'static')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/add/', async(req, res)=>{
    let x = Number(req.query.x);
    let y = Number(req.query.y);

    const result = calc.add(x, y);
    res.status(200).json(result);
});

app.post('/add-post/', async(req, res)=>{
    let x = Number(req.query.x);
    let y = Number(req.query.y);

    const result = calc.min(x, y);
    res.status(201).json(result);
});

app.get('/min/', async(req, res)=>{
    let x = Number(req.query.x);
    let y = Number(req.query.y);

    const result = calc.min(x, y);
    res.status(200).json(result);
});


app.get('/mult/', async(req, res)=>{
    let x = Number(req.query.x);
    let y = Number(req.query.y);

    const result = calc.multiply(x, y);
    res.status(200).json(result);
});

app.get('/div/', async(req, res)=>{
    let x = Number(req.query.x);
    let y = Number(req.query.y);

    const result = calc.div(x, y);
    res.status(200).json(result);
});


app.listen(port, ()=>{
    console.log(`Listening to Port ${port}`);
});








