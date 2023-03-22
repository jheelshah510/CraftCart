import React from 'react'
import Navigation from '../components/Navigation'
import one from "../components/1.png";
import two from "../components/2.png";
import three from "../components/3.png";
import four from "../components/4.png";
import five from "../components/5.png";

const SearchProduct = () => {
  return (
    <div>
        <Navigation />
        <div style={{display: 'flex'}}>
            <div style={{border: '1px solid black', width: '20%', margin: '1%'}}>
                <h3>Filters</h3>
            </div>
            <div style={{margin: '1%', width: '70%'}}>
                <div className='singleproduct' style={{display: 'flex', margin: '1%', border: '1px solid black'}}>
                    <img src={one} style={{width: '120px', height: '160px', margin: '1%'}}  />
                    <div style={{margin: '1%'}}>
                        <h3>Product Name</h3>
                    </div>
                </div>
                <div className='singleproduct' style={{display: 'flex', margin: '1%', border: '1px solid black'}}>
                    <img src={two} style={{width: '120px', height: '160px', margin: '1%'}}  />
                    <div style={{margin: '1%'}}>
                        <h3>Product Name</h3>
                    </div>
                </div>
                <div className='singleproduct' style={{display: 'flex', margin: '1%', border: '1px solid black'}}>
                    <img src={three} style={{width: '120px', height: '160px', margin: '1%'}}  />
                    <div style={{margin: '1%'}}>
                        <h3>Product Name</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchProduct