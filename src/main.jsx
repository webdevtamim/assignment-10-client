import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <h2>Home</h2>
      },
      {
        path: '/addProduct',
        element: <h2>Add Product</h2>
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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
