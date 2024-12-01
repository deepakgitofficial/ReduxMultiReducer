import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemActionCreater } from '../store/CartReducer';
import { addWishListItem } from '../store/WishListReducer';



const ProductCard = ({productId, title, rating, price, imageUrl }) => {
  // const cartCount = [count, setCount]= useState(0);
  // console.log(count, 'count val')

  const dispatch= useDispatch();
  return (
    <div className="product">
      <p>{productId}</p>
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={()=> dispatch(addItemActionCreater({productId, title, rating, price, imageUrl },))}>Add to Cart</button>
        <button onClick={()=> dispatch(addWishListItem({productId, title, rating, price, imageUrl}))}>WishList</button>
      </div>
    </div>
  )
}

export default ProductCard