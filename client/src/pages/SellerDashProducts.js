import React from 'react'
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import SellerNavigation from '../components/SellerNavigation';

const SellerDashProducts = () => {
  return (
    <div>
      <SellerNavigation />
    <div style={{width: "80%", margin: "10%",}}>
        <table class="table">
  <thead class="thead-dark">
    <tr>
        <th colSpan="4" style={{textAlign: "center"}}>Your Products</th>
    </tr>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Edit <FontAwesomeIcon icon={faPenToSquare} /></th>
      <th scope="col">Delete <FontAwesomeIcon icon={faTrash} /></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Product 1</td>
      <td><Button variant="outline-primary" type="submit">
            Edit 
          </Button></td>
      <td><Button variant="outline-danger" type="submit">
            Delete 
          </Button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Product 2</td>
      <td><Button variant="outline-primary" type="submit">
            Edit 
          </Button></td>
      <td><Button variant="outline-danger" type="submit">
            Delete 
          </Button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Product 3</td>
      <td><Button variant="outline-primary" type="submit">
            Edit 
          </Button></td>
      <td><Button variant="outline-danger" type="submit">
            Delete 
          </Button></td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
  )
}

export default SellerDashProducts