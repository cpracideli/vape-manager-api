
const FlavorBrands = require('../models/FlavorBrands')

module.exports = {
    async index(req, res){
        const flavorBrands = await FlavorBrands.findAll();
        return res.json(flavorBrands);
    },
    async store(req, res){
        const {name, created_by} = req.body;

        const flavorBrands = await FlavorBrands.create({name, created_by});

        return res.json(flavorBrands);
    }
}