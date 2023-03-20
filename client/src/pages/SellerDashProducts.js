import React, { useEffect, useState } from "react";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import SellerNavigation from "../components/SellerNavigation";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

const SellerDashProducts = () => {
  const { sellerId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/product/seller/${sellerId}/products`)
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [sellerId]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, [isLoaded]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div>
      <SellerNavigation />
      <div style={{ width: "80%", margin: "10%" }}>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                Your Products
              </th>
            </tr>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">
                Edit <FontAwesomeIcon icon={faPenToSquare} />
              </th>
              <th scope="col">
                Delete <FontAwesomeIcon icon={faTrash} />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <th scope="row">{products.indexOf(product) + 1}</th>
                <td>{product.productName}</td>
                <td>
                  <Button variant="outline-primary" type="submit">
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="outline-danger" type="submit">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerDashProducts;
