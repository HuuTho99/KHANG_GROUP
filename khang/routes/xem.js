var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/baogia', function(req, res, next) {
  res.render('xem/baogia', { title: 'Express' });
});

router.get('/yeucausanxuat', function(req, res, next) {
  res.render('xem/yeucausanxuat', { title: 'Express' });
});

router.get('/tongketquy', function(req, res, next) {
  res.render('xem/tongketquy', { title: 'Express' });
});

module.exports = router;