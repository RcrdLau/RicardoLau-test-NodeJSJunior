import React from 'react'

function Footer() {

    const submitForm = () => {
        return true
    }

    return (
        <footer>
            <button type="submit" onclick={submitForm}>Order Now</button>
        </footer>
    )

}

export default Footer