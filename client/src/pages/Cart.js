import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import one from "../components/1.png";
import two from "../components/2.png";
import three from "../components/3.png";
import four from "../components/4.png";
import five from "../components/5.png";

const Cart = () => {

    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
      };
    
      const setIncrease = () => {
        setAmount(amount + 1);
      };

  return (
    <div>
        <Navigation />
        <div style={{display: "flex"}}>
            <div style={{marginLeft: "5%", marginRight: "2%", marginTop: "2%", width: "80%"}}>
                <div className='singleproduct' style={{display: "flex", border: "1px solid black", width: "90%", marginBottom: "1%"}}>
                    <div>
                        <img src={one} style={{width: "15vw", height: "20vh", margin: "5px"}} />
                        <div className="increase-decrease" style={{marginLeft: "30%", marginBottom: "1%"}}>
                            <button onClick={setDecrease}>
                            <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <h4 style={{ margin: "2px" }}>{amount}</h4>
                            <button onClick={setIncrease}>
                            <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3>Product Name</h3>
                        <h4>Seller: Name</h4> 
                        <h4>Price: $400</h4>
                        <Button variant="outline-danger" type="submit"> Remove </Button>
                    </div>
                </div>

                <div className='singleproduct' style={{display: "flex", border: "1px solid black", width: "90%", marginBottom: "1%"}}>
                    <div>
                        <img src={two} style={{width: "15vw", height: "20vh", margin: "5px"}} />
                        <div className="increase-decrease" style={{marginLeft: "30%", marginBottom: "1%"}}>
                            <button onClick={setDecrease}>
                            <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <h4 style={{ margin: "2px" }}>{amount}</h4>
                            <button onClick={setIncrease}>
                            <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3>Product Name</h3>
                        <h4>Seller: Name</h4> 
                        <h4>Price: $400</h4>
                        <Button variant="outline-danger" type="submit"> Remove </Button>
                    </div>
                </div>

                <Button variant="outline-primary" type="submit"> Place Order </Button>
            </div>
            <div style={{border: "1px solid black", width: "40%", height: "30%", margin: "5%", marginTop: "2%"}}>
                <div style={{margin: "2%"}}>
                <h3>PRICE DETAILS</h3>
                <br />
                <h4>Price - $300</h4>
                <br />
                <h4>Discount - $100</h4>
                <br />
                <h4><b>Total Amount - $200</b></h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart