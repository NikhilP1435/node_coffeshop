const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum :['sweet','cold','hot'],
        required:true
 },
 num_sales:{
    type:Number,
    default:355465
 }
});

const menuItem = mongoose.model('menuItem',menuItemSchema);

module.exports = menuItem;