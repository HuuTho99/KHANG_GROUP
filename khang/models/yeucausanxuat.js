var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var YeuCauSanXuatSchema = new Schema({
    thoiGianYeuCau: String,
    thoiGianGiaoHang: String,
    diaChiGiaoHang: String,
    nguoiNhan: String

},{collection: yeu_cau_san_xuat});

module.exports = mongoose.model('yeu_cau_san_xuat', YeuCauSanXuatSchema);