import React from 'react'
import ContactInformation from './ContactInformation'
import ShippingAddress from './ShippingAddress'
import BillingAddress from './BillingAddress'
import Boxes from './Boxes'
import CheckBox from './CheckBox'

function Header() {

    return (
        <body className="container">    
            <ContactInformation />
            <ShippingAddress />
            <BillingAddress />
            <Boxes />
            <div>
                <CheckBox msgg="Use shipping address same as billing address" />
            </div>
        </body>
    )

}

export default Header