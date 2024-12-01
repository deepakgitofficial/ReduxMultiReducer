import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData= useSelector((state)=> {
    return state.cartItems;
  })
  const wishListData= useSelector((state)=> {
    return state.wishList;
  })
  return (
    <header className=' bg-green-200 w-full'>
      <div className="flex flex-row w-full">
        <div className='p-4 basis-1/5'>
          Logo
        </div>
        <div className='basis-3/5 flex justify-between'>
          <ul className='flex justify-center'>
            <li className='mr-4 flex items-center'><NavLink to="/">Home</NavLink></li>
            <li className='mr-4 flex items-center'><NavLink to="mycartpage">My Cart</NavLink></li> 
            <li className='flex items-center'><NavLink to="mywishlist">My Wishlist</NavLink></li> 
          </ul> 
        </div>
        <div className='basis-1/5 flex justify-center'> 
          <ul className='flex justify-center p-3'>
            <li className='mr-5 cart-icon'> <span className=' count-item' >
            {
              cartData.reduce( (accumulator, current)=>accumulator + current.quantity,0)
            }
              </span>
              <NavLink to="mycartpage"><LuShoppingCart /></NavLink>
              </li>
            <li className='cart-icon'><span className=' count-item'>
              
            {
              wishListData.reduce( (accumulator, current)=>accumulator + current.quantity,0)
            }
              </span><FaHeart/></li>
          </ul> 
        </div>
      </div>
    </header>
  )
}

export default Header