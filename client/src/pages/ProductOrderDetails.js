import React from 'react'
import SellerNavigation from '../components/SellerNavigation'

const ProductOrderDetails = () => {
  return (
    <div>
        <SellerNavigation />
        <div style={{width: "50%", marginTop: "10%", marginLeft: "25%"}}>
        <table class="table" style={{textAlign: 'center',}}>
  <thead class="thead-dark">
    <tr>
      <th scope="col" colSpan='2'>Order Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Date of Order</th>
      <td>15-03-23</td>
    </tr>
    <tr>
      <th scope="row">Quantity</th>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">Address</th>
      <td>
        Address goes here
      </td>
    </tr>
    <tr>
      <th scope="row">Buyer Details</th>
      <td>
        Basic details of Buyer
      </td>
    </tr>
  </tbody>
</table>

        </div>
    </div>
  )
}

export default ProductOrderDetails