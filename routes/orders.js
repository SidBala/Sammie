var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/new', function(req, res, next) {
    res.send('Ordering for ' + req.body.person);
});

module.exports = router;