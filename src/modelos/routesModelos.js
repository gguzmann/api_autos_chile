const express = require('express');
const {connect} = require('../../db');

const routes = express.Router();

routes.get('/', (req, res) => {

    connect.query('SELECT * FROM modelos', (err, result) => {
        if(err) throw err;
        res.json(result);
    })

})

routes.get('/:id', (req, res) => {

    const { id } = req.params;

    connect.query(`SELECT * FROM modelos where id = ${id}`, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
})

routes.get('/marca/:marcaId', (req, res) => {

    const { marcaId } = req.params;

    connect.query(`SELECT * FROM modelos where id_marca = ${marcaId}`, (err, result) => {
        if(err) throw err;
        res.json(result);
        console.log(result)
    })
})

module.exports = routes