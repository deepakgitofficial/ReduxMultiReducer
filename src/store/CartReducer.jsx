
    // --------action-types--------
 const CART_ADD_ITEM ='cart/addItem';
 const CART_INCERESE_QTY = 'cart/incereseItem'
 const CART_DECREASE_QTY = 'cart/decreaseItem'
 const CART_REMOVE_ITEM= 'cart/removeItem'

// -----action-Creaters-------------
export function addItemActionCreater(productData){
        return {
            type: CART_ADD_ITEM, payload: productData
        }
}
export function increaseActionCreator(productId){
    return {
        type: CART_INCERESE_QTY,
        payload: {productId: productId }
    }
}

export function decreaseActionCreator(productId ){
        return {
            type: CART_DECREASE_QTY,
            payload: {productId: productId }
        }
}
export function removeActionCreator(productId){
        return {
            type: CART_REMOVE_ITEM,
            payload: {
                productId: productId,
             }
        }
}


// ----------Cart-Reducer-function------
export default function cartReducer(state=[], action){
    switch (action.type) {
        case CART_ADD_ITEM: 
          let existingItem = state.find((item)=> item.productId === action.payload.productId);
          // let existingItem= state.filter((item)=> item.productId === action.payload.productId);
          // console.log(action.payload, 'existingItem');
        if(existingItem){
          return state.map((item)=>{
            if(item.productId=== existingItem.productId){
              return {...item, quantity: item.quantity+1}
            } 
              return item; 
          })
        }
        return [...state, {...action.payload, quantity: 1}]

        case CART_REMOVE_ITEM: return state.filter((cartItem) => {
            return cartItem.productId !== action.payload.productId;
          })
        
        case CART_INCERESE_QTY:
          return state.map((incEle) => {
              if (incEle.productId === action.payload.productId) {
                return { ...incEle, quantity: incEle.quantity + 1 }
              }
              return incEle;
            })

        case CART_DECREASE_QTY:
          return state.map((cartEle) => {
              if (cartEle.productId === action.payload.productId) {
                return { ...cartEle, quantity: cartEle.quantity - 1}
              }
              return cartEle;
            }).filter((cartEle)=> cartEle.quantity>0)
        default: return state;
      }
}