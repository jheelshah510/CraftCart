import React from 'react'
import SellerNavigation from '../components/SellerNavigation'

const SellerAccountInfo = () => {
  return (
    <div>
        <SellerNavigation />
        <div style={{width: "50%", marginTop: "10%", marginLeft: "25%"}}>
        <table class="table" style={{textAlign: 'center',}}>
  <thead class="thead-dark">
    <tr>
      <th scope="col" colSpan='2'>Account Info</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td>Mark@example.com</td>
    </tr>
    <tr>
      <th scope="row">PhoneNumber</th>
      <td>
        9014756839
      </td>
    </tr>
    <tr>
      <th scope="row">Categories</th>
      <td>
        Category1, Category2, Category3
      </td>
    </tr>
    <tr>
      <th scope="row">Address</th>
      <td>
        This is address field
      </td>
    </tr>
  </tbody>
</table>

        </div>
    </div>
  )
}

export default SellerAccountInfo