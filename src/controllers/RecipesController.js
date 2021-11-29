
const Recipes = require('../models/Recipes')

module.exports = {
    //get all
    async index(req, res) {
        console.log("RECIPES GET ALL");

        const recipes = await Recipes.findAll();
        return res.json(recipes);
    },

    async indexOne(req, res){
        const {recipe_id} = req.params;
        const recipe = await Recipes.findOne({
            where: {
                id: recipe_id
            }
        })

        return res.json(recipe);
    },

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

        const recipes = await Recipes.update(
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
        return res.json(recipes);
    },
}