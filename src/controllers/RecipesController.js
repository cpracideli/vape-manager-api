
const Recipes = require('../models/Recipes')

module.exports = {
    //get all
    async index(req, res) {
        console.log("RECIPES GET ALL");

        const recipes = await Recipes.findAll();
        return res.json(recipes);
    },

    //create new flavor brand
    //              name: DataTypes.STRING,
    //              img_url:DataTypes.STRING,
    //              description: DataTypes.STRING,
    //              stepping_days: DataTypes.INTEGER,
    //              owner_rating: DataTypes.INTEGER,
    //              created_by: DataTypes.STRING
    async store(req, res) {
        const {
            name,
            img_url,
            description,
            stepping_days,
            owner_rating,
            created_by
        } = req.body;

        const recipes = await Recipes.create({ 
            name,
            img_url,
            description,
            stepping_days,
            owner_rating,
            created_by
        });

        return res.json(recipes);
    },
    async remove(req, res) {
        const { recipe_id } = req.params;
        const recipes = await Recipes.destroy({
            where: {
                id: recipe_id
            }
        });
        return res.status(204).json({ success: 'Recipe deleted' })
    },
    async update(req, res) {
        const { recipe_id } = req.params;
        const { name,
            img_url,
            description,
            stepping_days,
            owner_rating } = req.body;
        const flavors = await FlavorBrands.update(
            {
                name,
                img_url,
                description,
                stepping_days,
                owner_rating
            },
            {
                where: {
                    id: recipe_id
                }
            }
        );
        return res.json(flavors);
    },
}