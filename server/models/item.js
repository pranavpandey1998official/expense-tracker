const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema =new Schema({
    description: {
      type:String ,
      required:true  
    },
    cost: {
        type: Number,
        required:true
    },
})

module.exports= ItemSchema