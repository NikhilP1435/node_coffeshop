const mongoose = require('mongoose');

// Define the pereson schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        required:true,
        type:String,
        enum:['waiter','Owner','chef']
    },
    mobile:{
        type:Number,
        required:true
         },
     address:{
        type:String
     } ,
     email:{
        type:String,
        required:true
     } ,
     salary:{
        type:Number,
        required:true,
     }  
});

//   Create Nikii Model
const Nikii = mongoose.model('Nikii',personSchema);
module.exports = Nikii;