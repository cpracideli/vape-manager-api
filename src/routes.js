const { Router } = require('express');
const express = require('express');
const FlavorBrandsController = require('./controllers/FlavorBrandsController')
const FlavorsController = require('./controllers/FlavorsController')
const RecipesController = require('./controllers/RecipesController')

const routes = express.Router();



//==========flavorBrands Routes==========
routes.get('/flavorBrands', FlavorBrandsController.index); //get all
routes.post('/flavorBrands', FlavorBrandsController.store); //create new flavor brand
routes.delete('/flavorBrands/:flavor_brand_id', FlavorBrandsController.remove); //delete flavor brand
routes.patch('/flavorBrands/:flavor_brand_id', FlavorBrandsController.update); //update flavor brand

//==========flavors Routes==========
routes.get('/flavorBrands/:flavor_brand_id/', FlavorsController.index); //get by flavors by brand
routes.get('/flavors/', FlavorsController.indexAll); //get all independent of brand
routes.get('/flavors/:flavor_id', FlavorsController.indexOne); //get one
routes.post('/flavorBrands/:flavor_brand_id/flavors', FlavorsController.store); //create new flavor
routes.delete('/flavors/:flavor_id', FlavorsController.remove) //delete flavor
routes.patch('/flavors/:flavor_id', FlavorsController.update ) //update flavor

//==========Recipes==========
routes.get('/recipes', RecipesController.index); //get all
routes.post('/recipes', RecipesController.store); //create new flavor brand
routes.delete('/recipes/:recipe_id', RecipesController.remove); //delete flavor brand
routes.patch('/recipes/:recipe_id', RecipesController.update); //update flavor brand

// routes.get('/recipes/', (req, res) => res.json([{name: "recipe 1"}, {name: "recipe 2"}])) //get all
// routes.get('/recipes/', (req, res) => res.json([{name: "recipe 1"}, {name: "recipe 2"}])) //get one
// routes.post('/recipes/', FlavorsController.store); //create recipe
// routes.delete('/recipes/:recipe_id', FlavorsController.remove) //delete recipe
// routes.patch('/recipes/:recipe_id', FlavorsController.update ) //update recipe

//==========Flavors Recipe==========


routes.get('/', (req,res) => {
    return res.json({endpoints: routes.stack});
});

module.exports = routes;