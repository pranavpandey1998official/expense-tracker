import React, { Component } from 'react';
import ItemList from './itemList';
import DatewiseItem from './DatewiseItem';


const DatewiseItemList = (props) =>{
 
    return( 
    <ul>{props.datewiseItems.map( (datewiseItem)=> {
       
      return <DatewiseItem key={datewiseItem._id} datewiseItem={datewiseItem}  />
    }
    )}
    </ul>)

}


export default (DatewiseItemList);