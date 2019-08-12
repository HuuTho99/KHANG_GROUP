var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BaoGiaSchema = new Schema({
    version: Number,
    benMua: {
        ten: String,
        diaChi: String,
        dienThoai: String,
        fax: String,
        nguoiPhuTrach: String,
        email: String
    },
    benBan: {
        ten: String,
        ngay: String,
        nguoiPhuTrach: String,
        email: String
    },
    cacKhoanKhac: String

},{collection: san_pham});

module.exports = mongoose.model('bao_gia', BaoGiaSchema);