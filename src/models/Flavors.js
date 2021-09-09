const {Model, DataTypes} = require('sequelize');
const FlavorBrands = require('../models/FlavorBrands')

class Flavor extends Model{
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                created_by: DataTypes.STRING
            },
            {
                sequelize,
            }
        )
    }
    static associate(models){
        console.log(models)
        this.belongsTo(models.flavorBrands, {foreignKey: 'flavor_brand_id',  as: 'brand'});
    }
}
module.exports = Flavor;