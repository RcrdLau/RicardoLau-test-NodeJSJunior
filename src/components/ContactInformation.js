import React from 'react'

function ContactInformation() {

    return (
        <form className="contact-information">
            <h2>Contact Information:</h2>
            <input type="text" placeholder="First Name: " />
            <input type="text" placeholder="Last Name: " />
            <input type="text" placeholder="Email Address: " />
            <input type="text" placeholder="Phone: " />
            <select name="language" required>
                <option value="" disabled selected hidden>Language: </option>
                <option value="portuguese">Portuguese</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
            </select>
            <select name="country" required>
                <option value="" disabled selected hidden>Country: </option>
                <option value="brasil">Brasil</option>
                <option value="unitedstates">United States</option>
                <option value="france">France</option>
            </select>
        </form>
    )
}

export default ContactInformation