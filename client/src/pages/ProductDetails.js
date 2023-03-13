import React, { useState } from 'react'
import Navigation from "../components/Navigation";
import one from "../components/1.png";
import two from "../components/2.png";
import three from "../components/3.png";
import four from "../components/4.png";
import five from "../components/5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import './ImageSlider.css';
import Button from "react-bootstrap/Button";

const ProductDetails = () => {

    const [amount, setAmount] = useState(1);
    
    const setDecrease = () => {
        amount>1 ? setAmount(amount-1):setAmount(1);
    };

    const setIncrease = () => {
        setAmount(amount+1);
    };

    const imgs=[
        {id:0,value:one},
        {id:1,value:two},
        {id:2,value:three},
        {id:3,value:four},
        {id:4,value:five}
      ]
      const [wordData,setWordData]=useState(imgs[0])
      const handleClick=(index)=>{
        console.log(index)
        const wordSlider=imgs[index];
        setWordData(wordSlider)
      }

  return (
    <div>
    <Navigation />
    <Button className='add-cart' style={{marginLeft:"50vh", marginTop:"5vh"}}><FontAwesomeIcon icon={faArrowLeft} /><b> Back To Products</b></Button>
    <div className='super' style={{marginLeft:"45vh", marginTop:"1vh"}}>
    <div className="main">
      <img src={wordData.value} style={{height: "50vh"}} alt='An Alt Text' /> 
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id===i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} style={{height: "10vh"}} alt='An Alt Text' />
        </div>
        )}
      </div>
    </div>
    <div className='details'>
        <h2>Product Name</h2>
        <h3>$30</h3>
        <div style={{maxWidth: '40%', marginBottom: '2px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <h4>Brand: Addidas</h4>
        <h4>Available: Out of Stock</h4>
        <div className='increase-decrease'>
            <button onClick={setDecrease}><FontAwesomeIcon icon={faMinus} /></button>
            <h4 style={{margin: '2px'}}>{amount}</h4>
            <button onClick={setIncrease}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <Button className='add-cart'><b>Add to Cart</b></Button>
    </div>
    </div>
        </div>
  )
}

export default ProductDetails