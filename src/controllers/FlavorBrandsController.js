
const FlavorBrands = require('../models/FlavorBrands')

module.exports = {
    //get all
    async index(req, res){
        const flavorBrands = await FlavorBrands.findAll();
        return res.json(flavorBrands);
    },
    //create new flavor brand
    async store(req, res){
        const {name, created_by} = req.body;

        const flavorBrands = await FlavorBrands.create({name, created_by});

        return res.json(flavorBrands);
    },
    async remove(req, res){
        const {flavor_brand_id} = req.params;
        const flavors = await FlavorBrands.destroy({
            where:{
                id: flavor_brand_id
            }
        });
        return res.status(204).json({success: 'Flavor Brand deleted'})
    },
    async update(req, res){
        const {flavor_brand_id} = req.params;
        const {name} = req.body;
        const flavors = await FlavorBrands.update(
            {
                name
            },
            {
                where:{
                    id: flavor_brand_id
                }
            }
        );
        return res.json(flavors);
    },
}