import React from 'react'

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar">
                    <a href='#Home' className="navbar-left">NOMBRE & NOMBRE</a>
                    <div className="navbar-right">
                        <a href="#AboutMe">Confirmacion</a>
                        <a href="#Resume">Ceremonia</a>
                        <a href="#Projects">Fiesta</a>
                        <a href="#Skills">Regalos</a>
                        <a href="#Skills">Mas</a>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar