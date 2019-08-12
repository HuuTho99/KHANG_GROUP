var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BaoGiaSchema = new Schema({
    version: Number,
    benMua: {
        // type: Object
        ten: String,
        diaChi: String,
        dienThoai: String,
        fax: String,
        nguoiPhuTrach: String,
        email: String
    },
    benBan: {
        type: Object,
        ten: String,
        ngay: String,
        nguoiPhuTrach: String,
        email: String
    },
    yeuCauSX: Boolean,
    cacKhoanKhac: String

},{collection: 'bao_gia'});

module.exports = mongoose.model('bao_gia', BaoGiaSchema);