var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SanPhamSchema = new Schema({
    _id: Schema.Types.ObjectId,
    jobCode: String,
    baoGia: [{type: Schema.Types.ObjectId, ref: 'bao_gia'}],
    yeuCauSanXuat: [{type: Schema.Types.ObjectId, ref: 'yeu_cau_san_xuat'}]
},{collection: san_pham});

module.exports = mongoose.model('san_pham', SanPhamSchema);