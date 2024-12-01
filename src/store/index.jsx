import { combineReducers, createStore } from "redux";
import cartReducer, 
    { addItemActionCreater } 
        
        from "./CartReducer";
import wishListReducer from "./WishListReducer";
import productReducer from "./ProductReducer";


    // const initialState = {
    //     cartItems: [],
    //       wishList: [],
    //       Products: []
    //   }

      const reducer= combineReducers({
            // ----key value should be a reducer fun----
            cartItems: cartReducer,
            wishList: wishListReducer,
            Products: productReducer
      })
   export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    // store.dispatch(addItemActionCreater(1));
    // store.dispatch(addItemActionCreater(2));
    // store.dispatch(increaseActionCreator(2));
    // store.dispatch(decreaseActionCreator(2));
    // store.dispatch(removeActionCreator(1))



