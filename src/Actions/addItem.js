import {ADD_ITEM} from './actionType';
import axios from 'axios';
import {URL} from '../utility';
import fetchAllItems from './fetchAll'
 const addItem = (item) => {
    return dispach => {
        axios.post(URL+'api/items',item).then(response=>
            dispach(fetchAllItems()))
    }
}


    export default addItem;

