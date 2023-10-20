import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { createContext } from 'react'

export const AssetContext = createContext();

function App() {
  const products = useLoaderData();

  return (
    <>
      <AssetContext.Provider value={products}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </AssetContext.Provider>
    </>
  )
}

export default App
