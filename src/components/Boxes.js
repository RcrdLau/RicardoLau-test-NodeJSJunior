import React from 'react'
import { useForm } from 'react-hook-form'
import CheckBox from './CheckBox'

function Boxes() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form className="boxes" onSubmit={handleSubmit(onSubmit)}>
            <h2>Check the boxes below:</h2>
                <CheckBox msgg="Does any vehicle need to be equiped with fuel cut off device?" />
                <CheckBox msgg="Will any trackers be installed on a bike, truck or machinery?" />
                <CheckBox msgg="Will you need to indentufy the fleet drivers?" />
            <input className="qnt" type="number" placeholder="How many trackers would you like to purchase?" name="number" ref={register({required: true})}/>
        </form>
    )
}

export default Boxes