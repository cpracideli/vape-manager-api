const { Model, DataTypes } = require('sequelize');
const RecipeFlavors = require('../models/RecipeFlavors')

class Recipe extends Model {
    static init(sequelize) {

        super.init(
            {
                name: DataTypes.STRING,
                img_url:DataTypes.STRING,
                description: DataTypes.STRING,
                stepping_days: DataTypes.INTEGER,
                owner_rating: DataTypes.INTEGER,
                created_by: DataTypes.STRING
            },
            {
                sequelize,
                modelName: 'recipes'
            }
        )
    }

    // static associate(models) {
    //     this.hasMany(models.RecipeFlavor, { foreignKey: 'recipes_id', as: 'recipe_flavors' });
    // }
}
module.exports = Recipe;