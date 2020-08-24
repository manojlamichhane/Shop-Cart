import im1 from '../../components/photos/16A-300x300.jpg'
import im2 from '../../components/photos/18A-300x300.jpg'
import im3 from '../../components/photos/AYU_2497-300x300.jpg'
import im4 from '../../components/photos/AYU_2678-300x300.jpg'
import im5 from '../../components/photos/AYU_3074-300x300.jpg'
import im6 from '../../components/photos/G10-G902-Black-300x300.jpg'
import {Add_to_cart,AddQuantity,SubQuantity,RemoveItem} from '../Cart/cartTypes'

const initialState = {
    items: [
        {id:1,title:'Goldstar G10 G1101 Grey', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1100,img: im1},
        {id:2,title:'Goldstar G10 G751 Navy', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:800,img: im2},
        {id:3,title:'Goldstar AYU_2497', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:1200,img: im3},
        {id:4,title:'Goldstar AYU_2678', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:2600,img: im4},
        {id:5,title:'Goldstar AYU_3074', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1600,img: im5},
        {id:6,title:'Goldstar G10-G902-Black', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:900,img: im6}
    ],
    addedItems:[],
    total: 0
}

const cartReducer=(state=initialState, action) => {
    
    switch(action.type){
     case Add_to_cart:{
        let addedItem = state.items.find((item)=>item.id===action.id)
        let existedItem = state.addedItems.find((item)=>item.id===action.id)
        if(existedItem)
        {
            addedItem.quantity += 1
            return{
                ...state,
                total:state.total + addedItem.price
            }
        }
        else{
            addedItem.quantity = 1
            let newtotal = state.total + addedItem.price
            return{
                ...state,
                addedItems:[ ...state.addedItems, addedItem],
                total : newtotal  
            }
            
        }
     }
     case AddQuantity:{
        let addedItem = state.items.find((item)=>item.id===action.id)
        addedItem.quantity += 1
            return{
                ...state,
                total:state.total + addedItem.quantity*addedItem.price
            }
     }
     case SubQuantity:{
         let addedItem = state.items.find((item)=>item.id===action.id)
         addedItem.quantity -= 1
         if(addedItem.quantity===0){
            let newItems = state.addedItems.filter((item) => action.id !==item.id)
            return{
                ...state,
                addedItems:newItems,
                total:state.total - addedItem.quantity*addedItem.price    
            }     
         }
         else{
         return{
             ...state,
             total:state.total - addedItem.quantity*addedItem.price
         }
        }
        }
    case RemoveItem:{
        let itemToRemove = state.addedItems.find((item)=>item.id===action.id)
        let newItems = state.addedItems.filter((item) => action.id !==item.id)
        return{
            ...state,
            addedItems:newItems,
            total:state.total-itemToRemove.quantity*itemToRemove.price
        }
    }    
     default: return state
     }   
    }

export default cartReducer;