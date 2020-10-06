var express = require('express'),

  app = express(),
  port = process.env.PORT || 3000;
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
app.listen(port);
var routes = require('./api/routes/todoRoutes'); //importing route
routes(app); //register the route





console.log('todo list RESTful API server started on: ' + port);
