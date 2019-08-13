var express = require('express');
var sanPhamModel = require('../models/sanpham');
var mongoose = require('mongoose');
var router = express.Router();



/* GET home page. */
router.get('/',async function(req, res, next) {
  var data = await sanPhamModel.find({});
  // console.log(data);
  
  res.render('index', { title: 'Express', data: data });
});

router.post('/them-job',(req, res, next) =>{
  const jobCode = new sanPhamModel({
    _id: new mongoose.Types.ObjectId(),
    jobCode: req.body.jobCode
  })
  console.log(jobCode);
  
  jobCode.save();

  res.redirect('/');

})

module.exports = router;
