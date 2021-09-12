
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

    
    async indexOne(req, res){
        const {flavor_id} = req.params;
        const flavor = await Flavors.findOne({
            where: {
                id: flavor_id
            }
        })

        return res.json(flavor);
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
    },

    async remove(req, res){
        const {flavor_id} = req.params;
        const flavors = await Flavors.destroy({
            where:{
                id: flavor_id
            }
        });
        return res.status(204).json({success: 'Flavor deleted'})
    },
    async update(req, res){
        const {flavor_id} = req.params;
        const {name} = req.body;
        const flavors = await Flavors.update(
            {
                name
            },
            {
                where:{
                    id: flavor_id
                }
            }
        );
        return res.json(flavors);
    },
}
