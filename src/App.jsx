// import { useSelector } from "react-redux"

import './App.css'

import Header from "./components/Header";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyCartPage from './components/MyCartPage';
import Layout from './components/Layout';
import WishListPage from './components/WishListPage';


function App() {
    // const data= store.getState();
    // console.log(data)
    // const productsList = useSelector((state) => state.Products);
    // console.log(productsList);

    const myRouter = createBrowserRouter([{
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home /> 
            },
            {
                path: '/mycartpage',
                element: <MyCartPage /> 
            },
            {
                path: '/mywishlist',
                element: <WishListPage /> 
            },
        ]
    }]);

    return <RouterProvider router={myRouter} />

    // return (
    //     <>
    //     <Header/>
    //     <Home/>
    //     </>
    // )
}

export default App
