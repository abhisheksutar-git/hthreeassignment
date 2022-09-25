import React from 'react'
import "./SideMenu.css"

export default function SideMenu({sidebar}) {
  return (
    <>
    <div>
        {/* imported sidebar toogle function logic using props to perform sidebar slide mototion function  */}
        <div className={ sidebar ? "sidebar sidebar-open " : "sidebar"} >
            <div className='sidebarInside'>
                  <div className='selected' >
                        <i class="fa-brands fa-bitcoin"></i>
                        <p>Coin </p>
                  </div>

                  <div>
                      <i class="fa-solid fa-arrow-right-arrow-left"></i>
                        <p>Exchanges </p>
                  </div>

                  <div>
                        <i class="fa-solid fa-shuffle"></i>
                        <p>Swap</p>
                  </div>

                  <div>
                        <i class="fa-solid fa-server"></i>
                        <p>API  </p>
                  </div>

                  <div>
                      <i class="fa-solid fa-gear"></i>
                      <p>Setting </p>
                  </div>

                  <div  >
                      <button className='buttonStyle' >Connect Wallet</button>
                  </div>
            </div>
        </div>
    </div>
    </>
  )
}
