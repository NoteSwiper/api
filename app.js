var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    formData = require('express-form-data'),
    dotEnv = require('dotenv');

dotEnv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(formData.parse({autoClean:true}));
app.use(formData.format());

app.use('/v1', indexRouter);
app.use('/v1/users', usersRouter);

app.get('/ping', function(req, res) {
    res.contentType('application/json; charset=utf-8');
    res.write(JSON.stringify( { status: true, message: 'PONG' }, null, 2 ));
    res.end();
})

var port = process.env.PORT || 8080;
app.listen(port);
console.log("server starting on "+port+" ...");

module.exports = app;