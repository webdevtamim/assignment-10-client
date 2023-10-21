import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './components/Error/Error.jsx'
import Home from './components/Home/Home.jsx'
import AddProduct from './components/AddProduct/AddProduct.jsx'
import Category from './components/Category/Category.jsx'
import Register from './components/Register/Register.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Login from './components/Login/Login.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <h2>My Cart</h2>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
