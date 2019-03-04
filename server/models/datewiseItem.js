const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema = require('./item')

const DatewiseItemSchema =new Schema({
    year:{
        type : Number,
        default: function(){
            var date = new Date()
            return date.getFullYear()
        },
    },
    month:{
        type : Number,
        default: function(){
            var date = new Date()
            return date.getMonth()
        },
    },
    day:{
        type : Number,
        required:function(){
            var date = new Date()
            return date.getDate()
        },
    },
    items:[ItemSchema]
})

const DatewiseItem = mongoose.model('DatewiseItem',DatewiseItemSchema)

module.exports= DatewiseItem