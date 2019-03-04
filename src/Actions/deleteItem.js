import {DELETE_ITEM} from './actionType';
import axios from 'axios';
import {URL} from '../utility';
import fetchAllItems from './fetchAll'
 const deleteItem=(id)=>{
    return dispach => {
        axios.delete(URL+'api/items/'+id).then(response=>
            {console.log(response)
            dispach(fetchAllItems())})
            
    }
}

/* const deleteItemAsync = (id) => {
    return{
        type:DELETE_ITEM,
        id:id
    }
} */

export default deleteItem;