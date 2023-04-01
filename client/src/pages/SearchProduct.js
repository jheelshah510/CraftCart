import React from "react";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/Loading";
import { useHistory } from "react-router-dom";
import { useFilterContext } from "../context/FilterContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/esm/Button";
import RangeSlider from "react-bootstrap-range-slider";
import "../css/SearchProduct.css";

const SearchProduct = () => {
  const [products, setProducts] = useState([]);
  const {
    filters: { category, price, maxPrice, minPrice },
    filter_products,
    all_products,
    sorting,
    updateFilterValue,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr].toString();
    });

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "selectedOptions");

  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  const [selectedOption, setSelectedOption] = useState("Select an option");

  const handleSelect = (eventKey, event) => {
    setSelectedOption(event.target.text);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setProducts(filter_products);
    }, 1000);
  }, [isLoaded, filter_products]);
  if (!isLoaded) {
    return <Loading />;
  }

  const displayProduct = (id) => {
    history.push(`/productdetails/${id}`);
  };

  return (
    <div>
      <Navigation />
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "1px solid black",
            width: "20%",
            height: "600px",
            margin: "1%",
          }}
        >
          <h2 style={{ marginLeft: "5%", marginTop: "6%" }}>
            <b>Filters</b>
          </h2>
          <h3 style={{ margin: "5%" }}>Categories</h3>
          {/* <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name="category"
            value="Jute"
            onChange={updateFilterValue}
          />
          <label style={{ marginLeft: "2%" }} htmlFor="vehicle1">
            {" "}
            Jute
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name="category"
            value="Pottery"
            onChange={updateFilterValue}
          />
          <label style={{ marginLeft: "2%" }} htmlFor="vehicle1">
            {" "}
            Pottery
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name="category"
            value="Leather"
            onChange={updateFilterValue}
          />
          <label style={{ marginLeft: "2%" }} htmlFor="vehicle1">
            {" "}
            Leather
          </label>
          <br />

          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name="category"
            value="Brass"
            onChange={updateFilterValue}
          />
          <label style={{ marginLeft: "2%" }} htmlFor="vehicle1">
            {" "}
            Brass
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name="category"
            value="Paintings"
            onChange={updateFilterValue}
          />
          <label style={{ marginLeft: "2%" }} htmlFor="vehicle1">
            {" "}
            Paintings
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name="category"
            value="Clothing"
            onChange={updateFilterValue}
          />
          <label style={{ marginLeft: "2%" }} htmlFor="vehicle1">
            {" "}
            Clothing
          </label>
          <br />
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name="category"
            value="Carpet Weaving"
            onChange={updateFilterValue}
          />
          <label style={{ marginLeft: "2%" }} htmlFor="vehicle1">
            {" "}
            Carpet Weaving
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name="category"
            value="Woodwork"
            onChange={updateFilterValue}
          />
          <label style={{ marginLeft: "2%" }} htmlFor="vehicle1">
            {" "}
            Woodwork
          </label> */}
          {categoryData.map((curElem, index) => {
            return (
              <div
                style={{
                  marginLeft: "30px",
                  float: "left",
                  marginBottom: "15px",
                }}
              >
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  className={curElem === category ? "active" : ""}
                  onClick={updateFilterValue}
                  style={{
                    backgroundImage: "linear-gradient(#f7f8fa ,#e7e9ec)",
                    borderColor: "#adb1b8 #a2a6ac #8d9096",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderRadius: "3px",
                    boxShadow: "rgba(255,255,255,.6) 0 1px 0 inset",
                    boxSizing: "border-box",
                    color: "#0f1111",
                    cursor: "pointer",
                    display: "inline-block",
                    fontFamily: '"Amazon Ember",Arial,sans-serif',
                    fontSize: "13px",
                    height: "29px",
                    outline: "0",
                    overflow: "hidden",
                    padding: "0 11px",
                    textAlign: "center",
                    textDecoration: "none",
                    textOverflow: "ellipsis",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    touchAction: "manipulation",
                    whiteSpace: "nowrap",
                  }}
                >
                  {curElem}
                </button>
              </div>
            );
          })}
          <br />
          <div style={{ margin: "10%", marginTop: "200px" }}>
            <RangeSlider
              value={price}
              name="price"
              style={{ width: "15vw" }}
              onChange={updateFilterValue}
              min={minPrice}
              max={maxPrice}
            />
          </div>
          <h2 style={{ marginLeft: "5%", marginTop: "5%" }}>
            <b>Sort</b>
          </h2>
          <div style={{ marginLeft: "5%", marginTop: "1%" }}>
            <DropdownButton
              title={selectedOption}
              onSelect={(handleSelect, sorting)}
            >
              <Dropdown.Item eventKey="lowest">Price:Low to High</Dropdown.Item>
              <Dropdown.Item eventKey="highest">
                Price:High to Low
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div style={{ margin: "1%", width: "70%" }}>
          {products.map((prd) => (
            <div
              className="singleproduct"
              style={{
                display: "flex",
                margin: "1%",
                border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => displayProduct(prd._id)}
            >
              <img
                src={prd.imageUrl[0]}
                style={{ width: "120px", height: "160px", margin: "1%" }}
                alt="hellos"
              />
              <div style={{ margin: "1%" }}>
                <h4>{prd.productName}</h4>

                <h3 style={{ position: "absolute" }}>&#x20B9;{prd.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
