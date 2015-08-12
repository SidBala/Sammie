var express = require('express');
var ChildProcess = require('child-process-promise');
var swig = require('swig');
var util = require('util');

var router = express.Router();

var template = swig.compile('casperjs test.js --verbose --log-level=info test.js --cardholder_name="{{cardholder_name}}" --payment_number={{payment_number}} --security_code={{security_code}} --credit_month={{credit_month}} --credit_year={{credit_year}} --payment_type={{payment_type}}');

/* GET users listing. */
router.post('/new', function(req, res, next) {
  var command = template(req.body);
  console.log(command);

  ChildProcess.exec(command)
  .then(function(result) {
    res.send('<html><body><img src="/output.png"></body> </html>');
  })
  .fail(function (err) {
      console.error('ERROR: ', err);
  })
  .progress(function (childProcess) {
      console.log('childProcess.pid: ', childProcess.pid);
  });
});

module.exports = router;
