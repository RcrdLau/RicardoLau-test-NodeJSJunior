import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function ShippingAddress() {
    useEffect(() => {
        axios.get('http://localhost:8080/states')
            .then(response => {
                console.log("aqui: ", response)
                setStates(response.data)
            })
            .catch((error) => {
                console.log("Ops! Algo deu errado: ", error)
            })
    }, [])
    const [state, setStates] = useState([])

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    
     

    const renderOptions = (arr) => {
        if (arr.length === 0) {
            return (
                <option value="0">State: </option>
            )
        } else {
            return arr.map(item => {
                return (
                    <option value={item.ID}>{item.Name}</option>
                )
            })
        }
    }            


    return (
        <form className="shipping-address" onSubmit={handleSubmit(onSubmit)}>
            <h2>Shipping Address:</h2>
            <input type="text" placeholder="Address Line 1: " name="address1" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
            <input type="text" placeholder="Address Line 2: " name="address2" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
            <select name="city" name="city" ref={register({ required: true })}>
                <option value="" disabled selected hidden>City: </option>
                <option value="portuguese">Portuguese</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
            </select>
            <select name="state" name="state" ref={register({ required: true })}>
                <option value="" disabled selected hidden>State: </option>
                {renderOptions(state)}
            </select>
            <select name="zip-code" name="zipcode" ref={register({ required: true })}>
                <option value="" disabled selected hidden>ZIP Code: </option>
                <option value="brasil">Brasil</option>
                <option value="unitedstates">United States</option>
                <option value="france">France</option>
            </select>
        </form>
    )
}

export default ShippingAddress