const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send({
        titulo:'Seja bem vindo ao canal de notícias',
        data: '15/03/2022'
    })
})

module.exports = router