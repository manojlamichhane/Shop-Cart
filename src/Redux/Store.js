import {createStore} from 'redux'
import cartReducer from './Cart/cartReducer'

export const Store = createStore(cartReducer);