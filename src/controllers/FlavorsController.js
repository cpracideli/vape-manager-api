
const FlavorBrands = require('../models/FlavorBrands')
const Flavors = require('../models/Flavors')

module.exports = {
    //GET (READ)
    async index(req, res){
        const {flavor_brand_id} = req.params;

        const flavorBrand = await FlavorBrands.findByPk(flavor_brand_id, {
            include: {
                association: 'flavors'
            }
        })

        return res.json(flavorBrand);
    },

    async indexAll(req, res){
        const flavors = await Flavors.findAll();
        return res.json(flavors);
    },

    //POST (CREATE)
    async store(req, res){
        const {flavor_brand_id} = req.params;
        const {name, created_by} = req.body;

        const flavorBrand = await FlavorBrands.findByPk(flavor_brand_id)

        if(!flavorBrand){
            return res.status(400).json({error: 'Flavor Brand not found'})
        }

        const flavors = await Flavors.create({name, created_by, flavor_brand_id});

        return res.json(flavors);
    }
}
