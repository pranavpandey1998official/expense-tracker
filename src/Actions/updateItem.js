import {UPDATE_ITEM} from './actionType';
import axios from 'axios';
import {URL} from '../utility';

export const updateItem =(item) => {
    return dispach => {
        axios.put(URL+'api/items'+item._id,item).then(response=>
            dispach(updateItemAsync(response.data)))
    }
}




export const updateItemAsync = (item) => {
    return {
        type: UPDATE_ITEM,
        item: item
    }
}