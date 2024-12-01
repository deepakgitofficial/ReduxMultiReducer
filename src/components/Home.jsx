import React from 'react'
import { useSelector } from "react-redux"
import ProductCard from './ProductCard';


const Home = () => {
    const productsList = useSelector((state) => state.Products);
    // console.log(productsList);
  return (
    <div>
        <div className="app-container">
            {/* <h1 className="ext-3xl font-bold underline">Redux with multi Reducer</h1> */}
            <div className="products-container">
                {productsList.map(({ id, title, rating, price, image }) => (
                    // <h2>{title}</h2>
                    <ProductCard
                    key={id}
                    productId={id}
                    title={title}
                    rating={rating.rate}
                    price={price}
                    imageUrl={image}
                    />
                ))}
            </div>
            </div>
    </div>
  )
}

export default Home