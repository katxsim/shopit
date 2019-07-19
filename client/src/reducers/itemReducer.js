import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
  } from '../actions/types';
import uuid from 'uuid';
  
const initialState = {
    items: [ 
    {id: uuid(), name: 'Eggs'},
    {id: uuid(), name: 'Chocolate'},
    {id: uuid(), name: 'Candy'}
]
  }
  
export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
        };
      default:
        return state;
    }
  }