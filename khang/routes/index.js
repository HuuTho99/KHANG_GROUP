var express = require('express');
var sanPhamModel = require('../models/sanpham');
var router = express.Router();



/* GET home page. */
router.get('/',async function(req, res, next) {
  var data = await sanPhamModel.find({});
  console.log(data);
  
  res.render('index', { title: 'Express', data: data });
});

module.exports = router;
