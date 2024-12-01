// ----action-creater-----
const WISHLIST_ADD_ITEM= 'wishlist/add';
const WISHLIST_REMOVE_ITEM= 'wishlist/remove';

// ----action-type----

export function addWishListItem(productData){
  return { type: WISHLIST_ADD_ITEM, payload: productData}
}

export function removeWishListItem(productId){
  
  return { type: WISHLIST_REMOVE_ITEM, payload: productId}
  // console.log(productId, 'wishlist reducer')
}


// -------------wishList-Reducer-Method-------------

export default function wishListReducer(state=[], action){
    switch (action.type) { 
        case WISHLIST_ADD_ITEM: 
        let existingItem = state.find((item)=> item.productId === action.payload.productId);
          // console.log(action.payload, 'WISHLIST ITEM');
        if(existingItem){
          return state.map((item)=>{
            if(item.productId=== existingItem.productId){
              return {...item, quantity: item.quantity+1}
            } 
              return item; 
          })
        }
        return [...state, {...action.payload, quantity: 1}]

  
        case WISHLIST_REMOVE_ITEM:
          return state.filter((removeEle) => {
              // console.log(removeEle);
              // alert(removeEle);
              return removeEle.productId !== action.payload.productId;

            })
        default: return state;
      }
}