import React from 'react'
import { MdDelete } from "react-icons/md";
import { addItemActionCreater } from '../store/CartReducer';
import { useDispatch } from 'react-redux';
import { removeWishListItem } from '../store/WishListReducer';


 function WishlistItem({productId, title, rating, price, imageUrl, quantity }) { 
    const dispatch= useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <p>{productId}</p>
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
        <button onClick={()=> dispatch(addItemActionCreater({productId, title, rating, price, imageUrl},))}>Add to Cart</button>
      <div className="delete text-rose-400" onClick={()=> dispatch(removeWishListItem({productId}))}>Delete<MdDelete/></div>
    </div>
  )
}
export  default WishlistItem;
