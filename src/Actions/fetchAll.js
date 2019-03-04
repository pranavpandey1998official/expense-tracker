import {FETCH_ALL} from './actionType';
import axios from 'axios';
import {URL} from '../utility';

const fetchAllItems =() => {
    return dispach => {
        axios.get(URL+'api/items').then(response=>{
            
            dispach(fetchAllAsync(response.data))})
    }
}


const fetchAllAsync = (datewiseItems) => {
    return {
        type: FETCH_ALL,
        datewiseItems: datewiseItems
    }
}

export default fetchAllItems;