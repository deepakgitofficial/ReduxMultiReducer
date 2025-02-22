import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux';


const MyCartPage = () => {
  const cartData= useSelector((state)=> {
    return state.cartItems;
})
  console.dir(cartData, 'from mycart')

  // const cartItems = [
  //   {
  //     id: 1,
  //     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //     imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //     quantity: 1,
  //     rating: 3.9,
  //     price: 109.95,
  //   },
  //   {
  //     id: 2,
  //     title: 'Mens Cotton Jacket',
  //     imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  //     quantity: 1,
  //     rating: 4.7,
  //     price: 55.99,
  //   },
  //   {
  //     id: 3,
  //     title: 'Mens Casual Slim Fit',
  //     imageUrl: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  //     quantity: 1,
  //     rating: 2.1,
  //     price: 15.99,
  //   },
  // ]

  // const [qty, setQty]= useState(0);
  return (
    <div className="cart-container mt-5">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartData.map(
          ({ productId, title, rating, price, imageUrl, quantity }) => (
            <CartItem
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

        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          
          <div> 
            <span>quantity</span>
            {
          cartData.reduce(
              (accumulator, current)=>{ 
              return accumulator + current.quantity
            }, 0)
          }
          </div>
        
          <div className="total">
            <span>Total:</span> 
            {
              cartData.reduce(
              (accumulator, current)=>{ 
                  
              return accumulator + (current.quantity * current.price)
            },0)
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCartPage