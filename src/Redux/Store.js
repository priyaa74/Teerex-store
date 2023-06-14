import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as ProductReducer} from './ProductReducer/reducer'
import { reducer as CartReducer} from './CartReducer/reducer'

const allReducers=combineReducers({ProductReducer,CartReducer})

const reduxStore= legacy_createStore(allReducers,applyMiddleware(thunk))

export default reduxStore