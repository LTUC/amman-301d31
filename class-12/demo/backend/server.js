'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const server = express();
server.use(cors());

const PORT = process.env.PORT;

//MongoDB
const mongoose = require('mongoose');

let KittenModel;
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/301d31-Cats');

  const kittySchema = new mongoose.Schema({
    catName: String,
    catBreed: String,
    ownerEmail: String
  });

  KittenModel = mongoose.model('Kitten', kittySchema);

//   seedData();
}

//seeding a data function 

async function seedData()
{
    const fluffy = new KittenModel({ 
        catName: 'fluffy',
        catBreed: 'angora',
        ownerEmail: 'roaa.abualeeqa@gmail.com'
        });

    const frankie = new KittenModel({ 
        catName: 'frankie',
        catBreed: 'American',
        ownerEmail: 'roaa.abualeeqa@gmail.com'
        });

    const blakky = new KittenModel({ 
        catName: 'blakky',
        catBreed: 'American',
        ownerEmail: 'ahmad@gmail.com'
        });
        
    
        await fluffy.save();
        await frankie.save();
        await blakky.save();
}


//Routes
server.get('/', homeHandler);
server.get('/getCats',getCatsHandler);

//Functions Handlers
function homeHandler(req,res){

    res.send('Home Page');
}

function getCatsHandler(req,res){
    //send fav cats list (email)
    const email = req.query.email;
    KittenModel.find({ownerEmail:email},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
}

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})