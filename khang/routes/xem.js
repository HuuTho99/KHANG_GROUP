var express = require('express');
var sanPhamModel = require('../models/sanpham');
var baoGiaModel = require('../models/baogia');
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/baogia', function (req, res, next) {
  // res.render('xem/baogia', { title: 'Express' });
  const baoGia1 = new baoGiaModel({
    version: 1,
    benMua: {
      ten: 'tho',
      diaChi: '442/91/31A QL.1a, P.An Phu Dong',
      dienThoai: '0399869731',
      fax: '4566622',
      nguoiPhuTrach: 'hari',
      email: 'hari.com'
    },
    yeuCauSX: true
  });
  const baoGia2 = new baoGiaModel({
    version: 1,
    benMua: {
      ten: 'tho',
      diaChi: '442/91/31A QL.1a, P.An Phu Dong',
      dienThoai: '0399869731',
      fax: '4566622',
      nguoiPhuTrach: 'hari',
      email: 'hari.com'
    },
    yeuCauSX: false
  });
  baoGia1.save((err) => {
    // if(err) return handleError(err);
    baoGia2.save((err) => {
      const sanPham1 = new sanPhamModel({
        _id: new mongoose.Types.ObjectId(),
        jobCode: '3M-20156',
        baoGia: [baoGia1._id,baoGia2._id]
      });
      sanPham1.save((err) => {
        // if(err) return handleError(err);
      })
    })
  })


  res.send('ok nhe');
});

router.get('/yeucausanxuat', function (req, res, next) {
  res.render('xem/yeucausanxuat', { title: 'Express' });
});

router.get('/tongketquy', function (req, res, next) {
  res.render('xem/tongketquy', { title: 'Express' });
});

module.exports = router;