import React from 'react';
import Item from './item';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import deleteItem from '../Actions/deleteItem';


const ItemList = (props) =>{
 
    return(
        <React.Fragment>
            <ul className="list-group col-sm-9 offset-sm-2">
                {props.items.map((item) =>      
                    <Item item={item} key={item._id} deleteItem={props.deleteItem}/>
                )}
            </ul>
        </React.Fragment>
    );
}


const mapDispatchToProps = dispatch => {
    return({  
      deleteItem : id => {
        dispatch(deleteItem(id))
      }
    })
}


export default withRouter(connect(null,mapDispatchToProps)(ItemList));