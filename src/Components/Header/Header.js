import React from 'react'
import "./Header.css"

export default function Header({toggleSidebar}) {
  return (
    <div>
       <header>
              <div className='mainHeader' >
                <div class="container text-start headserSection">
                  <div class="row">
                    <div class="col text-start ">
                        <nav>
                            <ul>
                                <li>Coin</li>
                                <li>Exchange</li>
                                <li>Swap</li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col text-center ">
                            <div>
                                <h4>Coin Cap</h4>
                            </div>
                    </div>
                    <div class="col text-end headerRightSection ">
                        
                            <div>
                                <a href="#!"><i class="fa-solid fa-magnifying-glass"></i></a>
                            </div>
                            <div>
                                <a href="#!"><i class="fa-solid fa-gear"></i></a>
                            </div>
                            <div>
                                <button className='connect'>Connect Wallet </button>
                            </div>

                          
                       
                    </div>
                </div>
                </div>
                </div>

                <div className='mobileHeader'  >
                    <div className='mobileSection' >
                            <div className='searchSection' >
                                    <i class="fa-solid fa-magnifying-glass"></i> 
                            </div>

                            <div className='searchSection' >
                            Coin Cap
                            </div>

                            <div className='searchSection' >
                                <i class="fa-solid fa-bars" onClick={toggleSidebar}   ></i>
                            </div>
                    </div>
                </div>
           </header>
    </div>
  )
}
