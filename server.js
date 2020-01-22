const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// INICIANDO O APP E PASSANDO ALGUMAS CONFIGURAÇÕES
const app = express();
app.use(express.json());
app.use(cors());

// INICIANDO O BANCO DE DADOS
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
requireDir('./src/models');


// ROTAS, TODAS ESTÃO COM PREFIXO /API
app.use('/api', require('./src/routes'));


app.listen(3000);
