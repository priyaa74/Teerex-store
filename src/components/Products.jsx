import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {product_filter, product_search, product_request} from '../Redux/ProductReducer/productAction'
import ProductCard from './ProductCard'
import Loader from './Loader'
import './Styles.css'


function Products() {

const [searchData, setSearchData]= useState("");
const [category, setCategory]= useState([]);
const navigate= useNavigate();
const dispatch= useDispatch();

const  cartData= useSelector((storeData)=>
storeData.CartReducer.cart)
const {products,filteredProducts, error,loading}= useSelector((storeData)=>
storeData.ProductReducer)

const displayData= filteredProducts.length?filteredProducts:products


const searchOnKeyDown=(event)=>{
  if(event.key=="Enter"){
    dispatch(product_search(searchData))
  }
}

const handleSearch=()=>{
  dispatch(product_search(searchData))
}

const handleCategory=(e)=>{
  const {checked,value}= e.target;
  if(checked){
    setCategory([...category,value])
  }
  else{
    setCategory([...category.filter((e)=>e != value)])
  }
}

useEffect(()=>{
  dispatch(product_filter(category))
},[category])

useEffect(()=>{
  dispatch(product_search(searchData))
},[searchData])

useEffect(()=>{
  dispatch(product_request)
},[])

  return (
    <>
    <div id="navbar">
      <div>
        <h2>TeeRex Store</h2>
        </div>
        <div className='linksBox'>
          <h4 style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}>  Products </h4>
        <i class="fa fa-shopping-cart"  style={{fontSize:"35px" , cursor:"pointer"}}
        onClick={()=>{
          navigate("/cart")
        }}>
          <span id='count'>{cartData.length>0? cartData.length:0}</span>
        </i>
        </div>
    
    </div>

<div className='searchBar'>
  <input type="text"  placeholder='Search for...' onChange={(e)=>{
    e.preventDefault();
    setSearchData(e.target.value)}} 
  onKeyDown={searchOnKeyDown}/>
  <div className='searchIcon' onClick={handleSearch}>
    <i class="fa fa-search" aria-hidden="true"></i>
  </div>
</div>

<div className='displaySection'>
  <div className='filterSection'>

    <div className='attributeDiv'>
      <h3>Colour</h3>
      <div className='selectBox'>
        <input type="checkbox" name="" onChange={handleCategory} value={'Red'} />
        <label htmlFor="">Red</label>
      </div>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'Blue'} />
        <label htmlFor="">Blue</label>
      </div>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'Green'} />
        <label htmlFor="">Green</label>
      </div>
    </div>

    
    <div className='attributeDiv'>
      <h3>Gender</h3>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'Men'} />
        <label htmlFor="">Men</label>
      </div>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'Women'} />
        <label htmlFor="">women</label>
      </div>
    </div>


    <div className='attributeDiv'>
      <h3>Price</h3>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'250'} />
        <label htmlFor="">0 - Rs. 250</label>
      </div>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'251'} />
        <label htmlFor="">Rs. 251 - 450 </label>
      </div>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'450'} />
        <label htmlFor="">Rs. 450</label>
      </div>
    </div>


    
    <div className='attributeDiv'>
      <h3>Type</h3>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'Polo'} />
        <label htmlFor="">Polo</label>
      </div>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'Hoodie'} />
        <label htmlFor="">Hoodie</label>
      </div>
      <div className='selectBox'>
        <input type="checkbox"  name=""onChange={handleCategory} value={'Basic'} />
        <label htmlFor="">Basic</label>
      </div>
    </div>
  </div>



<div className='productsSection'>
  {loading? <Loader/>: error? <img src="https://i.gifer.com/DKke.gif" alt="errorImg" /> : displayData.map((item)=>{
    return(
      <ProductCard product={item} key={item.id}/>
    )
  }) }

</div>
</div>
    </>
  )
}

export default Products



