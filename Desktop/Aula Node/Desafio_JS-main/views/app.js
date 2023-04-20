
const { response } = require("express");
const express = require("express");


const router = express.Router()
router.get('/',(req, res) =>{
    res.send('index.html');
});

router.get('/rota1',(req, res) =>{
    res.send('contato.html');
});
router.get('/rota2',(req, res) =>{
    res.send('produto.html');
});

router.get('/rota3',(req, res) =>{
    res.send('catalogo.html');
});


const app = express();
app.use('/', router);


module.exports = app;