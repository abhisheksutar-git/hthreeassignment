import React from 'react'
import "./Footer.css"




export default function Footer() {
  return (
    <>
       <footer  className='footerTest' >
             <div className='footereSection'>
                <div  className='footer-content-section' >
                    <div className='container' >
                        <div class="row">

                            {/* First Section Of Footer  */}
                            <div class="col-lg-3 col-sm-6">
                               <div>
                                     <h6>COINCAP.IO</h6>
                               </div>
                               <div>
                                    <ul>
                                        <li>Methodology</li>
                                        <li>Support</li>
                                        <li>Our API</li>
                                        <li>Rate Comparison</li>
                                        <li>Careers</li>
                                    </ul>
                               </div>
                            </div>

                            {/* Second Section Of Footer  */}
                            <div class="col-lg-3 col-sm-6">
                                <div>
                                    <h6>LEGALS</h6>
                                </div>
                                
                                        <div>
                                            <ul>
                                                <li>Terms of Service</li>
                                                <li>Privacy Policy</li>
                                            </ul>
                                        </div>
                                    
                                <div>
                                    <h6>DISCLAIMER</h6>
                                </div>
                                        <div>
                                            <p>Neither Shapeshift AG nor CoinApp are 
                                                any way associated with CoinMarketCap 
                                                LLC or any of its good and service
                                            </p>
                                        </div>
                                        </div>


                            {/* Third Section Of Footer  */}
                            <div class="col-lg-3 col-sm-6">
                                <div>
                                    <h6>FOLLOW US </h6>
                                </div>

                                    <div>
                                        <i class="fa-brands fa-twitter"></i>
                                        <i class="fa-brands fa-square-facebook"></i>
                                    </div>
                            </div>

                            {/* Forth Section Of Footer  */}
                            <div class="col-lg-3 col-sm-6"> 
                                    <div>
                                        <h6>COIL APP AVAILABLE ON </h6>
                                    </div>

                                    <div className='iconmargin' >
                                        <img src="https://i.postimg.cc/GmfqYdLx/apple-store.png"  alt="Google Play" />
                                    </div>

                                    <div>
                                        <img src="https://i.postimg.cc/dQnRrwnZ/google-play.png" alt="playstore" />
                                    </div>
                            </div>
                        </div>
                    </div>            
                </div>
             </div>
            </footer>
    </>
  )
}
