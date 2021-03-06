const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/groupList', proxy({ target: 'https://hidden-hollows-73699.herokuapp.com/', changeOrigin: true }));
app.use('/getPrices', proxy({ target: 'https://hidden-hollows-73699.herokuapp.com/', changeOrigin: true }));

// app.use('/groupList', proxy({ target: 'http://localhost:1235/', changeOrigin: true }));
// app.use('/getPrices', proxy({ target: 'http://localhost:1235/', changeOrigin: true }));


app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
