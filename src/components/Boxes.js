import React from 'react'
import CheckBox from './CheckBox'

function Boxes() {

    return (
        <form className="boxes">
            <h2>Check the boxes below:</h2>
            {/* <div className="break"></div> */}
            <CheckBox msgg="Does any vehicle need to be equiped with fuel cut off device?" />
            <CheckBox msgg="Will any trackers be installed on a bike, truck or machinery?" />
            <CheckBox msgg="Will you need to indentufy the fleet drivers?" />
            <input type="number" placeholder="How many trackers would you like to purchase? " />
        </form>
    )
}

export default Boxes