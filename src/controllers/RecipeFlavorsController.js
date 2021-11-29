
const RecipeFlavors = require('../models/RecipeFlavors')

module.exports = {
    //get all
    async index(req, res) {
        const recipeFlavors = await RecipeFlavors.findAll();
        return res.json(recipeFlavors);
    },

    async byRecipe(req, res) {
        const {recipe_id} = req.params;

        const flavors = await RecipeFlavors.findAll({
            where: {
                recipe_id: recipe_id
            }
        })
        
        return res.json(flavors);
    },

    async store(req, res) {
        const {recipe_id} = req.params;
        const {
            flavor,
            amount,
            created_by
        } = req.body;

        const recipeFlavors = await RecipeFlavors.create({ 
            recipe_id,
            flavor,
            amount,
            created_by
        });

        return res.json(recipeFlavors);
    },
    async remove(req, res) {
        const { recipe_flavor_id } = req.params;
        const recipeFlavors = await RecipeFlavors.destroy({
            where: {
                id: recipe_flavor_id
            }
        });
        return res.status(204).json({ success: 'Recipe Flavor deleted' })
    },
    async update(req, res) {
        const { recipe_flavor_id } = req.params;
        const { flavor,
            amount,
            created_by } = req.body;
        const recipeFlavors = await RecipeFlavors.update(
            {
                flavor,
                amount,
                created_by
            },
            {
                where: {
                    id: recipe_flavor_id
                }
            }
        );
        return res.json(recipe_flavor_id);
    },
}