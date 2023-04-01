import React from "react";
import Navigation from "../components/Navigation";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserInfoContext from "../context/UserInfoContext";
import { useState } from "react";
import Loading from "../components/Loading";
import EmptyCartPage from "../components/EmptyCartPage.";
import NotLogin from "../components/NotLogin";

const Cart = () => {
  const { cart, removeItem, setDecrease, setIncrement, total_price } =
    useCartContext();
  const history = useHistory();

  const { loggedIn } = useContext(AuthContext);
  const allData = useContext(UserInfoContext);
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 1000);

  // return a loading message if isLoaded is false
  if (!isLoaded) {
    return <Loading />;
  }
  console.log(allData);

  const thankYou = () => {
    history.push("/thank");
  };

  if (loggedIn) {
    if (cart.length === 0) {
      return (
        <div>
          <EmptyCartPage />
        </div>
      );
    } else {
      return (
        <div>
          <Navigation />
          <Card
            style={{ marginTop: "1%", marginLeft: "5%", width: "50%" }}
            body
          >
            {allData.address && allData.phoneNumber && allData.pincode && (
              <>
                <b></b>Deliver to: {allData.address}, {allData.pincode}
                <br />
                Phone number: {allData.phoneNumber}
              </>
            )}
            {!allData.address || !allData.phoneNumber || !allData.pincode ? (
              <>
                {<FontAwesomeIcon icon={faExclamationTriangle} />} &nbsp;
                &nbsp;Please Update your User Profile to order. Click{" "}
                <a
                  href={"/profile/" + allData._id}
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  here
                </a>
                &nbsp;to update
              </>
            ) : null}
          </Card>

          <div style={{ display: "flex" }}>
            <div
              style={{
                marginLeft: "5%",
                marginRight: "2%",
                marginTop: "1%",
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
                      marginBottom: "3%",
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

                      <h4>&#x20B9;{currElem.price * currElem.amount}</h4>

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
                variant="info"
                type="submit"
                onClick={() => history.push("/searchproduct")}
              >
                {" "}
                Continue Shopping{" "}
              </Button>
            </div>
            <div
              style={{
                width: "40%",
                height: "30%",
                margin: "5%",
                marginTop: "1%",
              }}
            >
              {/* <div style={{ margin: "2%" }}>
                <h3>PRICE DETAILS</h3>
                <br />
                <h4>&#x20B9;{total_price}</h4>
                <br />
                <h4>GST-&#x20B9;{0.05 * total_price}</h4>
                <br />
                <h4>
                  <b>Total Amount - {total_price + 0.05 * total_price}</b>
                </h4>
              </div> */}
              <Card
                style={{
                  width: "18rem",
                  height: "15rem",
                  border: "1px groove black",
                }}
              >
                <Card.Header>Price Details</Card.Header>
                <Card.Body>
                  Price: &#x20B9;{total_price}
                  <br />
                  <br />
                  GST-&#x20B9;{0.05 * total_price}
                  <br />
                </Card.Body>
                <Card.Footer>
                  {" "}
                  Total Amount - {total_price + 0.05 * total_price}
                </Card.Footer>
              </Card>
              {allData.address && allData.phoneNumber && allData.pincode && (
                <Button
                  variant="primary"
                  style={{
                    width: "10vw",
                    height: "6vh",
                    marginTop: "20px",
                    marginLeft: "4vw",
                  }}
                  onClick={() => thankYou()}
                >
                  Place Order
                </Button>
              )}

              {!allData.address || !allData.phoneNumber || !allData.pincode ? (
                <Button
                  variant="primary"
                  style={{
                    width: "10vw",
                    height: "6vh",
                    marginTop: "20px",
                    marginLeft: "4vw",
                  }}
                  disabled
                >
                  Place Order
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <NotLogin />
      </div>
    );
  }
};

export default Cart;
