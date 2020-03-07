import React from 'react'

function ShippingAddress() {

    return (
        <form className="shipping-address">
            <h2>Shipping Address:</h2>
            <input type="text" placeholder="Address Line 1: " />
            <input type="text" placeholder="Address Line 2: " />
            <select name="city" required>
                <option value="" disabled selected hidden>City: </option>
                <option value="portuguese">Portuguese</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
            </select>
            <select name="state" required>
                <option value="" disabled selected hidden>State: </option>
                <option value="brasil">Brasil</option>
                <option value="unitedstates">United States</option>
                <option value="france">France</option>
            </select>
            <select name="zip-code" required>
                <option value="" disabled selected hidden>ZIP Code: </option>
                <option value="brasil">Brasil</option>
                <option value="unitedstates">United States</option>
                <option value="france">France</option>
            </select>
        </form>
    )
}

export default ShippingAddress