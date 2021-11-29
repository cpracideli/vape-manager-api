const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const FlavorBrands = require('../models/FlavorBrands');
const Flavors = require('../models/Flavors');
const Recipes = require('../models/Recipes');
const RecipeFlavors = require('../models/RecipeFlavors');

const connection = new Sequelize(dbConfig);
//console.log(connection);

//init models
FlavorBrands.init(connection);
Flavors.init(connection);
Recipes.init(connection);
RecipeFlavors.init(connection);

//associate models (set FK)
FlavorBrands.associate(connection.models);
Flavors.associate(connection.models);
Recipes.associate(connection.models);
RecipeFlavors.associate(connection.models);

module.exports = connection;