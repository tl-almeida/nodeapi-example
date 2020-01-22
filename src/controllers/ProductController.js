// IMPORTAR MONGOOSE E O MODEL PRODUCT
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// EXPORTAR MÓDULO
module.exports = {

    // LISTAGEM
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        
        return res.json(products);
    },

    // CRIAÇÃO
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // MOSTRAR SOMENTE UM PRODUTO
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // ATUALIZAR PRODUTO
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    // DELEÇÃO DE PRODUTO
    async delete(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send('Deleção feita com sucesso!');
    },
}