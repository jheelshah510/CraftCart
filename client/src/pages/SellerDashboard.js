import React from 'react'
import SellerDashCustomerOrder from '../components/SellerDashCustomerOrder'
import SellerDashProducts from '../components/SellerDashProducts'
import SellerNavigation from '../components/SellerNavigation'

const SellerDashboard = () => {
  return (
    <div>
        <SellerNavigation />
        <SellerDashCustomerOrder />
    </div>
  )
}

export default SellerDashboard