const express = require('express');
const FlavorBrandsController = require('./controllers/FlavorBrandsController')
const FlavorsController = require('./controllers/FlavorsController')

const routes = express.Router();

routes.get('/', (req,res) => {
    return res.json({hello: 'World'});
});

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
routes.get('/recipes/', (req, res) => res.json([{name: "recipe 1"}, {name: "recipe 2"}]))

//==========Flavors Recipe==========


module.exports = routes;