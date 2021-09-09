'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT;
app.use(cors());

let myMemory = {};

app.get('/recipes', getRecipes);

function getRecipes(request, response) {
  const ingredient = request.query.ingredient;

  //check : do I have the data ?
  if (myMemory[ingredient] !== undefined) {
    res.send(myMemory[ingredient]);
  }
  else {
    const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}`;
    axios
      .get(url)
      .then(res => {
        console.log(res.data.hits);
        const recipeArr = res.data.hits.map(recipe => new Recipe(recipe.recipe));
        //store the data
        myMemory[ingredient] = recipeArr;
        //send res
        response.status(200).send(recipeArr);
      })
      .catch(err => {
        console.err('error', err);
        response.status(500).send('error', err);
      })

  }





}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));