import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM,FETCH_ALL} from '../Actions/actionType';

const rootReducer = ( state={datewiseItems:[{
    _id:1,
    items:[{
        _id:1,
    }]

}],}, action ) => {
    switch(action.type) {

        case FETCH_ALL:
        console.log('in reducer')
        console.log(action.datewiseItems)
            return {
                ...state,
                datewiseItems:action.datewiseItems
            }

        /* case ADD_ITEM:
            var newState=Object.assign({}, state, {
            items: [
              ...state.items,
              action.item
            ]});

            return newState 
        
        case DELETE_ITEM:
            let newItems= state.items.filter(item=>item._id!==action.id)
            return {
                    items: newItems
                }

        case UPDATE_ITEM:
            return state.map(item=>{
                if(item._id === action.item.id){
                    return action.item
                }
                return item
            } ) */

        default: return state
    }
}

export default rootReducer;