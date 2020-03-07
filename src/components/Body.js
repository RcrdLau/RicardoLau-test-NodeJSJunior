import React from 'react'
import ContactInformation from './ContactInformation'
import ShippingAddress from './ShippingAddress'
import BillingAddress from './BillingAddress'
import Boxes from './Boxes'

function Header() {

    return (
        <body className="container">    
            <ContactInformation />
            <ShippingAddress />
            <BillingAddress />
            <Boxes />
        </body>
    )

}

export default Header