import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {add_item} from '../Redux/CartReducer/cartAction'

function ProductCard({product}) {
    const dispatch= useDispatch();
    const cartData= useSelector((storeData)=>
    storeData.CartReducer.cart)
  return (
    <div className='individual-product'>
      <h2 className='prodTitle'>{product.name}</h2>
      <img src={product.imageURL} alt={product.type} />
      <div className='itemDetails'>
      <p>Rs. {product.price}</p>
      <button onClick={()=>{
        let productIndex= cartData.findIndex((item)=>item.id == product.id)
        console.log(productIndex)
        if(productIndex !== -1){
          alert("Item is already added in the cart!")
          return ;
        }
        dispatch(add_item(product));
        alert(`${product.name} added in the cart successfully!`)
      }}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard