function routerApi (app){
    app.use('/api/marcas', require('./marcas/routesMarcas'))
    app.use('/api/modelos', require('./modelos/routesModelos'))
}

module.exports = routerApi
