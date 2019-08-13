var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SanPhamSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    jobCode: String,
    baoGia: [{type: mongoose.Schema.Types.ObjectId, ref: 'bao_gia'}],
    yeuCauSanXuat: {type: mongoose.Schema.Types.ObjectId, ref: 'yeu_cau_san_xuat'}
},{collection: 'san_pham'});

module.exports = mongoose.model('san_pham', SanPhamSchema);