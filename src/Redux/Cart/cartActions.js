import {Add_to_cart,AddQuantity,SubQuantity,RemoveItem} from './cartTypes'

export const ADDTOCART = (id) => {
    return{
        type: Add_to_cart,
        id
    }
}
export const ADDQUANTITY = (id) =>{
    return{
        type:AddQuantity,
        id
    }
}
export const SUBQUANTITY = (id) =>{
    return{
        type:SubQuantity,
        id
    }
}
export const REMOVEITEM = (id) =>{
    return{
        type:RemoveItem,
        id
    }
}