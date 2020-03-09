import React from 'react'
import { useForm } from 'react-hook-form'

function ContactInformation() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form className="contact-information" onSubmit={handleSubmit(onSubmit)}>
            <h2>Contact Information:</h2>
            <input type="text" placeholder="First name: " name="First name" ref={register({required: true, maxLength: 80})}/>
            <input type="text" name="last-name" placeholder="Last Name: " ref={register({required: true, maxLength: 100})}/>
            <input type="text" placeholder="Email Address: " name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
            <input type="text" placeholder="Phone: " name="Phone" ref={register({required: true, maxLength: 11})}/>
            <select name="language" name="language" ref={register({ required: true })}>
                <option value="" disabled selected hidden>Language: </option>
                <option value="portuguese">Portuguese</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
            </select>
            <select name="country" name="country" ref={register({ required: true })}>
                <option value="" disabled selected hidden>Country: </option>
                <option value="brasil">Brasil</option>
                <option value="unitedstates">United States</option>
                <option value="france">France</option>
            </select>
        </form>
    )
}

export default ContactInformation