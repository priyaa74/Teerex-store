import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase_item, decrease_item, total_price, delete_item, add_item } from '../Redux/CartReducer/cartAction'
import { useNavigate } from 'react-router-dom'
import './Styles.css'


function Cart() {
  const cartData = useSelector((storeData) => storeData.CartReducer.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let totalPrice = 0;

  console.log(cartData);

  return (
    <>
       <div id="navbar">
      <div>
        <h2>TeeRex Store</h2>
        </div>
        <div className='linksBox'>
          <h4 style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}>Products</h4>
        <i class="fa fa-shopping-cart"  style={{fontSize:"35px" , cursor:"pointer"}}
        onClick={()=>{
          navigate("/cart")
        }}>
          <span id='count'>{cartData.length>0? cartData.length:0}</span>
        </i>
        </div>
    
    </div>

      <div className='displayCart'>
        <h2>Shopping Cart</h2>
        <div className='cartItems'>
          {cartData.length ? cartData.map((item, index) => {
            {totalPrice += (item.price*item.currentQuantity)}
            return(
              <div className='individualItem' key={item.id}>
             <img src={item.imageURL} alt="itemImg" />
             <div className='titleAndPrice'>
              <h3>{item.name}</h3>
              <p>Rs. {item.price*item.currentQuantity}</p>
             </div>
             <div className='quantityBox'>
             <div className='incDec'>
              <button onClick={()=>{
                let itemIndex= cartData.findIndex((item)=> item.currentQuantity > item.quantity)
                if(itemIndex != -1){
                  alert("Item quantity limit is exceeded!")
                  return
                }
                dispatch(increase_item(item.id))
              }}>+</button>
              <div style={{fontSize:"20px",fontWeight:'bold',padding:'5px'}}>{item.currentQuantity}</div>
              <button onClick={()=>{
                dispatch(decrease_item(item.id))
              }}>-</button>
             </div>
             <button onClick={()=>{
              dispatch(delete_item(item.id))
             }}>Delete</button>
             </div>
              </div>
            )
          }) : <div className='emptyCart'>
            <p onClick={() => { navigate("/") }}>Start adding items in the cart</p>
            <img src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" alt="" />
          </div>}
        </div>
      <h3>Total amount:  Rs. {totalPrice? totalPrice: ""}</h3>
      </div>
    </>
  )
}

export default Cart