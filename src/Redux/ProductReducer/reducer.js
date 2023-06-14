import {PRODUCT_ERROR,PRODUCT_FILTER,PRODUCT_LOADING,PRODUCT_SEARCH,PRODUCT_SUCCESS} from './actionTypes'

let initialState={
    products:[],
    filteredProducts:[],
    loading:false,
    error:false
}

 const reducer=(state=initialState,{type,payload})=>{
    switch(type){
    case PRODUCT_LOADING: return{
        ...state,loading:true
    }
    case PRODUCT_ERROR: return{
        ...state,loading: false,error:true
    }
    case PRODUCT_SUCCESS: return{
        ...state,products:[...payload],
        filteredProducts:[...payload],
        error: false,
        loading: false
    }
    case PRODUCT_FILTER:return{
        ...state,filteredProducts:[...handleFilter(state.products,payload)]
    }
    case PRODUCT_SEARCH:return{
        ...state,filteredProducts:[...handleSearch(state.products,payload)]
    }
    default:
        return state;
    }
}

const handleFilter=(data,value)=>{
    let result= data.filter((items)=>{
        if(value.includes(items.gender)){
            return items;
        }
        else if(value.includes(items.color)){
            return items;
        }
        else if(value.includes("250")){
            return items.price <= 250;
        }
        else if(value.includes("251")){
            return items.price >= 251 && items.price<= 450;
        }
        else if(value.includes("450")){
            return items.price >= 450;
        }
        else if(value.includes(items.type)){
            return items;
        }
    })
    return result;
}


const handleSearch=(data, value)=>{
    let result= data.filter((items)=>{
        if(value.includes(items.color.toLowerCase())|| value.includes(items.type) ||
        value.includes(items.color) || value.includes(items.type.toLowerCase())){
            return items;
        }
    });
    console.log('searchResult:',result);
    return result.length ? result : data;
}

export {reducer}