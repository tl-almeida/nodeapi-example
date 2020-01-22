const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// ROTA PARA LISTAGEM DE PRODUTOS
routes.get('/products', ProductController.index);

// ROTA PARA LISTAGEM DE UM ÚNICO PRODUTO
routes.get('/products/:id', ProductController.show);

// ROTA PARA CRIAÇÃO DE PRODUTO
routes.post('/products', ProductController.store);

//ROTA PARA ATUALIZAÇÃO DE PRODUTO
routes.put('/products/:id', ProductController.update);

// ROTA PARA DELEÇÃO DE PRODUTO
routes.delete('/products/:id', ProductController.delete);


// EXPORTAR MÓDULO
module.exports = routes;
