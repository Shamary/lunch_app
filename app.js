//var async=require('asyncawait/async');
//var await=require('asyncawait/await');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var handlebars= require('express-handlebars');
var env=require("./config/environment.js");
var flash = require("express-flash");
var session= require("cookie-session");
var sanitizer= require("express-sanitizer");
var bcrypt=require("bcrypt");
var passport=require("passport-local");

/*var salt=bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("1234", salt);
    
console.log("hash= "+hash);$2b$10$8l6PIdGoli5YTtd0WtQ5Q.6kQwoP7ViCT6dNj7mjXJ5wwWFpWKFTu*/

//var mongooseConnect = require('./config/mongoose')();

//var user = mongoose.model('User', { firstname: 'String', lastname: 'String', username: 'String' });

var routes = require('./routes/index');
//var users = require('./routes/user');
//var models = require('./models/user');

//models(user).addUser();
//models(user).getUser();
//models(user).removeUser();

var app = express();
app.use(session({
  name: 'session',
  keys: ["lunch is always nice","nice lunch"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sanitizer());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());


app.engine('handlebars',handlebars({defaultLayout: 'layout'}));

app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;