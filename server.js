var express = require('express'),

  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);
var routes = require('./api/routes/todoRoutes'); //importing route
routes(app); //register the route





console.log('todo list RESTful API server started on: ' + port);
