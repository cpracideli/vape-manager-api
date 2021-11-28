const {Model, DataTypes} = require('sequelize');
const Recipes = require('../models/Recipes')

class RecipeFlavor extends Model{
    static init(sequelize) {
        super.init(
            {
                flavor: DataTypes.STRING,
                amount: DataTypes.FLOAT,
                created_by: DataTypes.STRING
            },
            {
                sequelize,
            }
        )
    }
    static associate(models){
        console.log(models)
        this.belongsTo(models.recipes, {foreignKey: 'recipe_id',  as: 'recipe'});
    }
}
module.exports = RecipeFlavor;