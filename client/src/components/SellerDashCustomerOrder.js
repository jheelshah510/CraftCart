import React from 'react'
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const SellerDashCustomerOrder = () => {
  return (
    <div style={{width: "80%", margin: "10%",}}>
        <table class="table">
  <thead class="thead-dark">
    <tr>
        <th colSpan="3" style={{textAlign: "center"}}>Customer Order</th>
    </tr>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Order Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Product 1</td>
      <td><Button variant="outline-primary" type="submit">
            View 
          </Button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Product 2</td>
      <td><Button variant="outline-primary" type="submit">
            Edit 
          </Button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Product 3</td>
      <td><Button variant="outline-primary" type="submit">
            Edit 
          </Button></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default SellerDashCustomerOrder