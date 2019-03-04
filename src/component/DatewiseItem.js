import React, { Component } from 'react';
import ItemList from './itemList';
import {month} from '../utility'
const DatewiseItem = ({datewiseItem}) =>{
    
     var totalexpense = datewiseItem.items.reduce((accumulator,item) =>accumulator+item.cost,0) 
     console.log(totalexpense)
    return(
            <div className="card">
                <div className="card-header">
                   <h3> {datewiseItem.day} {month[datewiseItem.month]} {datewiseItem.year} </h3>
                </div>
                <div className="card-body">
                    
                    <ItemList  items={datewiseItem.items}/>
                    
                </div>
                <div className="card-footer text-muted">
                <div class="btn btn-primary">total expense : <b>{totalexpense}</b></div>
                </div>
            </div>
    )

}
export default DatewiseItem;