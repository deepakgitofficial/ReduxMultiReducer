import React from 'react'
import WishlistItem from './WishlistItem'
import {useSelector } from 'react-redux'

const WishListPage = () => {
        const cartData= useSelector((state)=> {
          return state.wishList;
      })
// console.log(cartData);
  return (
    <div className="cart-container mt-5">
      <h1>Wishlist Page</h1>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Move to cart</div>
          <div className="total">Action</div>
        </div>
        {cartData.map(
          ({ productId, title, rating, price, imageUrl, quantity }) => (
            <WishlistItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              rating={rating}
            />
          )
        )}
    
      </div>
    </div>
  )
}

export default WishListPage