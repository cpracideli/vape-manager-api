const { Model, DataTypes } = require('sequelize');
const Flavors = require('../models/Flavors')

class FlavorBrand extends Model {
    static init(sequelize) {

        super.init(
            {
                name: DataTypes.STRING,
                created_by: DataTypes.STRING
            },
            {
                sequelize,
                modelName: 'flavorBrands'
            }
        )
    }

    static associate(models) {
        this.hasMany(models.Flavor, { foreignKey: 'flavor_brand_id', as: 'flavors' });
    }
}
module.exports = FlavorBrand;