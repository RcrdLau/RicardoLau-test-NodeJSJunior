import React from 'react'
import logo from '../assets/logo-contele.png'

function Header() {

    return (
        <header>
            <section className="container-header">
                <img src={logo} className="logo" alt="logo contele" />
            </section>
        </header>
    )

}

export default Header