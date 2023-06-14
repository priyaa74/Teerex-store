import {ADD_ITEM,DELETE_ITEM,INCREASE_ITEM,DECREASE_ITEM,TOTAL_PRICE} from './actionTypes'

const add_item=(payload)=>({
    type:ADD_ITEM,
    payload
})
const delete_item=(payload)=>({
    type:DELETE_ITEM,
    payload
})
const decrease_item=(payload)=>({
    type:DECREASE_ITEM,
    payload
})
const increase_item=(payload)=>({
    type:INCREASE_ITEM,
    payload
})
const total_price=(payload)=>({
    type:TOTAL_PRICE
})

export {add_item,delete_item,decrease_item,increase_item,total_price}