import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SellerNavigation from "../components/SellerNavigation";

const SellerAccountInfo = () => {
  const { id } = useParams();
  const [sellerInfo, setSellerInfo] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/sellauth/getInfo/${id}`)
      .then((response) => response.data)
      .then((data) => setSellerInfo(data))
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, [isLoaded]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SellerNavigation />
      <div style={{ width: "50%", marginTop: "10%", marginLeft: "25%" }}>
        <table className="table" style={{ textAlign: "center" }}>
          <thead className="thead-dark">
            <tr>
              <th scope="col" colSpan="2">
                Account Info
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{sellerInfo.seller.name}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{sellerInfo.seller.email}</td>
            </tr>
            <tr>
              <th scope="row">PhoneNumber</th>
              <td>{sellerInfo.seller.phoneNumber}</td>
            </tr>
            <tr>
              <th scope="row">Categories</th>
              <td>{sellerInfo.seller.selectedOptions}</td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>{sellerInfo.seller.address}</td>
            </tr>
            <tr>
              <th scope="row">Pincode</th>
              <td>{sellerInfo.seller.pincode}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerAccountInfo;
