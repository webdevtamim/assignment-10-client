import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './components/Error/Error.jsx'
import Home from './components/Home/Home.jsx'
import AddProduct from './components/AddProduct/AddProduct.jsx'
import Category from './components/Category/Category.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/products'),
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myCart',
        element: <h2>My Cart</h2>
      },
      {
        path: '/register',
        element: <h2>Register</h2>
      },
      {
        path: '/login',
        element: <h2>Login</h2>
      },
      {
        path: '/category/:brandName',
        element: <Category></Category>,
        loader: () => fetch('../categories.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
