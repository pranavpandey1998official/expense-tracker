import React from 'react';

const Item = ({item,deleteItem}) => {
   return(
      <div className="container item">
         <div className="row">
            <li className="list-group-item list-group-item-action col-sm-9">Name: {item.description} Cost: {item.cost}</li>
            <button type="button" onClick={()=>deleteItem(item._id)} className="btn btn-danger col-sm-2 offset-sm-1">Delete</button>
         </div>
      </div>
   );
}

export default Item;
