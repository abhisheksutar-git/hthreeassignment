import React, { useState } from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer"
import SideMenu from './Components/SideMenu/SideMenu'
import MarketCap from "./Components/MarketCap/MarketCap"




export default function App() {

  const [ sidebar , setsidebar ] = useState(false)


  // To Toggle Slide Bar i have used useState function ( it changes previous state ) 
  const onClickSidbar = () => {
    setsidebar((prevState) => !prevState)
    
  }

  return (
   
          <>
              <Header  toggleSidebar={onClickSidbar}  />
              <SideMenu sidebar={sidebar} />
              <MarketCap />
              <Footer />
          </>
   
  )
}
