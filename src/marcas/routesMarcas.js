const express = require('express');
const { connect } = require('../../db');

const routes = express.Router();

routes.get('/:id', (req, res) => {

    const { id } = req.params
    connect.query(`SELECT * FROM marcas where id = ${id}`, (err, result) => {
        if (err) throw err;
        res.json(result);
    })

});

routes.get('/', (req, res) => {
    connect.query('SELECT * FROM marcas', (err, result) => {
        if (err) throw err;
        res.json(result)
        console.log('resultado:', result.length, 'datos')
    });
});

module.exports = routes
