import React from 'react'
import ContactInformation from './ContactInformation'
import ShippingAddress from './ShippingAddress'
import BillingAddress from './BillingAddress'
import Boxes from './Boxes'


function Body() {

    return (
        <body>    
            <section className="container-body">
                <ContactInformation />
                <ShippingAddress />
                <BillingAddress />
                <Boxes />
            </section>
        </body>
    )

}

export default Body