import carts from './catrs'
import carousel from './carousel'
import  { combineReducers } from 'redux'


export default combineReducers({
    carts:carts,
    carousel:carousel,
})