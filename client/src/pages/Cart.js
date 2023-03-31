import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const [amount, setAmount] = useState(1);
  const { cart, removeItem, setDecrease, setIncrement } = useCartContext();
  const history = useHistory();
  console.log(cart);

  if (cart.length === 0) {
    return (
      <div>
        <h3>Your Cart is empty</h3>

        <Button
          variant="outline-primary"
          type="submit"
          onClick={() => history.push("/searchproduct")}
        >
          {" "}
          Continue Shopping{" "}
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Navigation />
        <div style={{ display: "flex" }}>
          <div
            style={{
              marginLeft: "5%",
              marginRight: "2%",
              marginTop: "2%",
              width: "80%",
            }}
          >
            {cart.map((currElem) => {
              return (
                <div
                  className="singleproduct"
                  style={{
                    display: "flex",
                    border: "1px solid black",
                    width: "90%",
                    marginBottom: "1%",
                  }}
                >
                  <div>
                    <img
                      src={currElem.image}
                      style={{ width: "15vw", height: "20vh", margin: "5px" }}
                      alt="hello"
                    />
                    <div
                      className="increase-decrease"
                      style={{ marginLeft: "30%", marginBottom: "1%" }}
                    >
                      <button onClick={() => setDecrease(currElem.id)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <h4 style={{ margin: "2px" }}>{currElem.amount}</h4>
                      <button onClick={() => setIncrement(currElem.id)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3>{currElem.name}</h3>

                    <h4>{currElem.price * currElem.amount}</h4>

                    <Button
                      variant="outline-danger"
                      onClick={() => removeItem(currElem.id)}
                    >
                      {" "}
                      Remove{" "}
                    </Button>
                  </div>
                </div>
              );
            })}

            <Button
              variant="outline-primary"
              type="submit"
              onClick={() => history.push("/searchproduct")}
            >
              {" "}
              Continue Shopping{" "}
            </Button>
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "40%",
              height: "30%",
              margin: "5%",
              marginTop: "2%",
            }}
          >
            <div style={{ margin: "2%" }}>
              <h3>PRICE DETAILS</h3>
              <br />
              <h4>Price - $300</h4>
              <br />
              <h4>Discount - $100</h4>
              <br />
              <h4>
                <b>Total Amount - $200</b>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
