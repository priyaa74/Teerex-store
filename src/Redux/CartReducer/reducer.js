import {ADD_ITEM,DELETE_ITEM,DECREASE_ITEM,INCREASE_ITEM,TOTAL_PRICE} from './actionTypes'

const initialState={
    cart:[],
    totalPrice:0
}

 const reducer=(state=initialState,{type,payload})=>{
    switch(type){
    case ADD_ITEM: return{
        ...state,cart:[...handleAdd(state,payload)]
    }
    case DELETE_ITEM: return{
        ...state,cart:[...handleDelete(state,payload)]
    }
    case DECREASE_ITEM: return{
        ...state,cart:[...handleDecrease(state.cart,payload)]
    }
    case INCREASE_ITEM: return{
        ...state,cart:[...handleIncrease(state.cart,payload)]
    }
    case TOTAL_PRICE: return{
        ...state,totalPrice:handlePrice(state.cart)
    }
    default: return state;
    }
}

const handleAdd=(cartData,item)=>{
    const addedData= cartData.cart;
    let currentItem= {
        currentQuantity:1,...item
    };
    console.log("current item",currentItem);
    addedData.push(currentItem);
    return addedData;
}

const handleDelete=(cartData,id)=>{
    let deletedData= cartData.cart.filter((item=> 
        item.id != id))
        console.log('cart after deleting data',cartData.cart)
        return deletedData;
}

const handleIncrease= (cartData,id)=>{
    return cartData.filter((item)=>item.id == id ? item.currentQuantity++ : item)
}

const handleDecrease= (cartData,id)=>{
    return cartData.filter((item)=>item.id == id && item.currentQuantity>1 ? item.currentQuantity-- : item)
}

const handlePrice=(cartData)=>{
    return cartData.reduce((acc,item)=>(acc+item.price)*item.currentQuantity,0)
}

export {reducer}