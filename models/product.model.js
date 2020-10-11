const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    code : {type : String, required : true},
    name : {type : String, required : true},
    description : {type : String, required : false},
    price : {type : Number, required : true}
}, {timestamps : true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;