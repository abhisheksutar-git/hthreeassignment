import React, { useState } from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer"
import SideMenu from './SideMenu/SideMenu'
import MarketCap from "./Components/MarketCap/MarketCap"
import FooterNew from "./Components/FooterNew/FooterNew"



export default function App() {

  const [ sidebar , setsidebar ] = useState(false)

  const onClickSidbar = () => {
    setsidebar((prevState) => !prevState)
    
  }

  return (
    <div className='appContainer' >

          <div className='ContentAndHeade'>
              <Header  toggleSidebar={onClickSidbar}  />
              <SideMenu sidebar={sidebar} />
              <MarketCap />
          </div>

          <div className='footerView' >
              <Footer />
              {/* <FooterNew /> */}
          </div>
    
       
   

     
            
   
        
        
    </div>
  )
}
