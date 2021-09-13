const express = require('express');
const FlavorBrandsController = require('./controllers/FlavorBrandsController')
const FlavorsController = require('./controllers/FlavorsController')

const routes = express.Router();

routes.get('/', (req,res) => {
    return res.json({hello: 'World'});
});

//flavorBrands Routes
routes.get('/flavorBrands', FlavorBrandsController.index);
routes.get('/caio', FlavorBrandsController.index);
routes.post('/flavorBrands', FlavorBrandsController.store);

//flavors Routes
routes.get('/flavorBrands/:flavor_brand_id/', FlavorsController.index);
routes.get('/flavors/', FlavorsController.indexAll);
routes.post('/flavorBrands/:flavor_brand_id/flavors', FlavorsController.store);


module.exports = routes;