import React from "react";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "../components/Loading";
import { useHistory } from "react-router-dom";
import { useFilterContext } from "../context/FilterContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const SearchProduct = () => {
  const [products, setProducts] = useState([]);
  const {
    filters: { selectedOptionss, price, maxPrice, minPrice },
    filter_products,
    sorting,
    updateFilterValue,
  } = useFilterContext();

  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  const [selectedOption, setSelectedOption] = useState("Select an option");

  const handleSelect = (eventKey, event) => {
    setSelectedOption(event.target.text);
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3030/product/getAllProducts")
  //     .then((response) => response.data)
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error(error));
  // }, []);

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
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(filter_products, "selectedOptions");
  console.log(categoryData);
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
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name="category"
            value="Jute"
            onSelect={updateFilterValue}
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
            onSelect={updateFilterValue}
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
            onSelect={updateFilterValue}
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
            onSelect={updateFilterValue}
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
            onSelect={updateFilterValue}
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
            onSelect={updateFilterValue}
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
            onSelect={updateFilterValue}
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
            onSelect={updateFilterValue}
          />
          <label style={{ marginLeft: "2%" }} htmlFor="vehicle1">
            {" "}
            Woodwork
          </label>
          <br />
          <h2 style={{ marginLeft: "5%", marginTop: "6%" }}>
            <b>Sort</b>
          </h2>
          <div style={{ marginLeft: "5%", marginTop: "6%" }}>
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
