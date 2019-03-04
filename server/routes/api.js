const express = require('express');
const DatewiseItem= require('../models/datewiseItem')

const router= express.Router();

router.get('/items',function(req,res,next){
    DatewiseItem.find({}).then(function(items){
        res.send(items)
    })
})

router.post('/items',function(req,res,next){
    var date = new Date()
    DatewiseItem.findOne({ 
        year: date.getFullYear(),
        month:date.getMonth(),
        day : date.getDate(),
     },function(err,datewiseItem){
        if(datewiseItem==null){
            var newItem = new DatewiseItem({  
                year: date.getFullYear(),
                month:date.getMonth(),
                day : date.getDate(),
                items: [req.body] 
            })
            newItem.save()
            res.send({
                isNewEntryForToday: true,
                item:null
            });
        }
        else{
            datewiseItem.items.push(req.body)
            var newItem=datewiseItem.items[0]
            datewiseItem.save()
            res.send({
                isNewEntryForToday: true,
                item:newItem
            })
        }
    }).catch(next)
})

 router.put('/items/:id',function(req,res,next){
    DatewiseItem.findOneAndUpdate(
        {'items._id':req.params.id},
        { 
            "$set": {
                "permissions.$": req.body
            }
        },
        function(err,doc) {
    
        }
    ).catch(next)
}) 

router.delete('/items/:id',function(req,res,next){
    DatewiseItem.findOne({'items._id':req.params.id},function(err,result){
    result.items.pull(req.params.id).remove()
    if(result.items.lenght===0){
      
    }
    result.save(function(){
        res.send(req.param.id);
    })})
}) 

module.exports =router;