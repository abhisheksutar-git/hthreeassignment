import axios from 'axios'
import React from 'react'
import "./MarketCap.css"
import { useEffect } from 'react'
import { useState } from 'react'




const totalNumber = [
  {
      id : 0,
      cname : "MARKET CAP",
      cvalue : "703.73B"
  },
  {
      id : 1,
      cname : "EXCHANGE VOL",
      cvalue : "21.09B"
  },
  {
      id : 2,
      cname : "ASSETS",
      cvalue : "2295"
  },
  {
      id : 3,
      cname : "EXCHANGES",
      cvalue : "73"
  },
  {
      id : 4,
      cname : "MARKETS",
      cvalue : "14059"
  },
  {
      id : 5,
      cname : "BTM DOM INDEX",
      cvalue : "31.09%"
  }
]

export default function MarketCap() {

  const [ apidata , setapiData ] = useState([])
  const [ limit , setlimit  ] = useState(10)
 
//  Fetched Data Using Axios NPM 
    const getDataFromApi = () => {
        axios.get(`https://api.coincap.io/v2/assets?page=1&limit=${limit}`)
        .then((response) => {
            return  setapiData(response.data.data) 
        })
    }

// UseEffect to Fetch Data again When View More is Clicked and limit state changes  
    useEffect(() => {
        getDataFromApi()
    }, [limit])

    console.log(limit)

// When View More Clicked to Show next data We are adding  x Number 
    const onClickViewMore = () => {
        return (
            setlimit((prev) => {
                return (
                    prev + 10
                )
            })
        )
    }




  return (
    <>          
                {/* Mobile View Drop Down  */}
                <div class="dropdown">
                        <button class="btn btn-secondary mobileviewMarketCap " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='dropDownList'>
                                <div>
                                    Market Snapshort 
                                </div>
                                <div>
                                <i class="fa-sharp fa-solid fa-caret-down"></i>
                                </div>
                            </div>
                        </button>


                        <ul class="dropdown-menu backgroundChange " aria-labelledby="dropdownMenuButton1">
                            {
                                totalNumber.map((eachValue) => {
                                        return (

                                            <li><a class="dropdown-item" href="#i">
                                            <div className='dropDownList' >
                                                <div>
                                                        {eachValue.cname} :
                                                </div>
                                                <div>
                                                        {eachValue.cvalue}
                                                </div>
                                            </div>
                                            </a></li>

                                        )
                                })
                            }
                        </ul>
                </div>


                {/* Mobile View Three Column Table  */}
                <div className='mobileViewtable' >
                    <table class="table tableBackground">
                        <thead className='tableHead'>
                            <tr>
                                <th colspan="2" className='nameWidth'>Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Volume (24hr)</th>
                            </tr>
                        </thead>
                                 {
                                  apidata.map((eachData) => {
                                        return (    
                                            <tbody>
                                                <tr className='right aligned'>
                                                    <td colspan=" 2" className='nameWidth'  >
                                                        <div className='nameDevider'>
                                                            <div> <img src={`https://assets.coincap.io/assets/icons/${eachData.symbol.toLowerCase()}%402x.png`} alt="" /> </div>
                                                            <div>{eachData.name} <p>{eachData.symbol}</p></div>
                                                        </div>
                                                    </td>
                                                    <td>{ parseFloat(eachData.priceUsd).toFixed(2) }</td>
                                                    <td> { parseFloat(eachData.changePercent24Hr).toFixed(2)  } </td>
                                                </tr>

                                            </tbody>
                                                )
                                        })
                                 }      
                    </table>
                </div>

                {/* Dekstop Main Section */}
                <div className='main'>
                    <section >
                        <div className='second-section-main' >
                            <div className='second-section'>
                                <div className='second-content-section' >
                                        <div className='container' >
                                            <div className="row" >
                                                {
                                                    totalNumber.map((eachElement) => {
                                                        return (
                                                            <div className='col-lg-2 col-sm-4' key={eachElement.id} >
                                                                <div className='firstContainer' >
                                                                    <h6>{eachElement.cname}</h6>
                                                                    <h4>{eachElement.cvalue}</h4>
                                                                </div>
                                                            </div>    
                                                        )
                                                    } )
                                                }
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Table Third Section  */}
                        <div className='thirdTableSection' >
                            <div className='tablesContainer' >
                                    <table class="table tableBackground">
                                        <thead className='tableHead'>
                                            <tr>
                                                <th scope="col">Rank</th>
                                                <th colspan="2" className='nameWidth'>Name</th>
                                                <th scope="col">Price</th>
                                                <th scope='col' >Market Cap </th>
                                                <th scope="col">VWAP (24hr)</th>
                                                <th scope="col">Supply</th>
                                                <th scope="col">Volume (24hr)</th>
                                                <th scope="col">Change (24hr)</th>  
                                            </tr>
                                        </thead>

                                                {
                                                    apidata.map((eachData) => {
                                                        return (    
                                                            <tbody>
                                                            <tr className='right aligned'>
                                                            <td >{eachData.rank}</td>
                                                            <td colspan=" 2" className='nameWidth'  >
                                                                <div className='nameDevider'>
                                                                    <div> <img src={`https://assets.coincap.io/assets/icons/${eachData.symbol.toLowerCase()}%402x.png`} alt="" /> </div>
                                                                    <div>{eachData.name} <p>{eachData.symbol}</p></div>
                                                                </div>
                                                            </td>
                                                            <td>{ parseFloat(eachData.priceUsd).toFixed(2) }</td>
                                                            <td> {  parseFloat(((eachData.marketCapUsd )/ 1000000000)).toFixed(2)  }b</td>
                                                            <td>{ parseFloat(eachData.vwap24Hr).toFixed(2) } </td>
                                                            <td> { parseFloat( ((eachData.supply )/ 1000000000)).toFixed(2)  } b </td>
                                                            <td>  {   parseFloat( ((eachData.volumeUsd24Hr )/ 1000000000)).toFixed(2)  } b  </td>
                                                            <td> { parseFloat(eachData.changePercent24Hr).toFixed(2)  } </td>
                                                            </tr>

                                                        </tbody>

                                                        )
                                                    })
                                                }
                                                
                                    </table>
                            </div>         
                        </div>
                    </section>
                </div>
                
                {/* Last Button Section  */}
                <div className='buttonSection'>
                    <button className='connect' onClick={onClickViewMore} >View More</button>
                </div>
    </>
  )
}
