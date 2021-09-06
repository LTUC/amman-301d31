'use strict';

require('dotenv').config(); //to import dotenv
const express = require('express'); //import express
const cors = require('cors'); //import cors
const pockData = require('./assets/data.json');

const server = express();
server.use(cors()); // make my server opened for any client

const PORT = process.env.PORT; //take the port from .env file

// http://localhost:3010/
server.get('/',(req,res)=>{
    res.send('Hello from the home route')
})

// http://localhost:3010/test
server.get('/test',(req,res) => {
    res.send('Hi from test route');
})

// http://localhost:3010/getPockNames
server.get('/getPockNames',(req,res)=>{
    // console.log(pockData);
    let pockName = pockData.results.map( (item) => {
        return item.name;
    })

    res.status(200).send(pockName);
})

// http://localhost:3010/getPock?name=bulbasaur
server.get('/getPock',(req,res)=>{
    const name = req.query.name;
    const result = pockData.results.find( (item) =>{
        if(item.name === name)
        return item;
    })

    res.send(result);
})

// http:localhost:3010/***** */
server.get('*',(req,res)=>{
    res.status(404).send('Sorry, page not found');
})

// to make our server listen on PORT
server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})