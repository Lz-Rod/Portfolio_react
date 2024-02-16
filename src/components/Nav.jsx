import React from "react"

function Nav() {
    return (
        
        <nav>
            <div className="container nav-container">

                <a href="" className="logo">
                    <div className="point">&lt;/&gt;</div>
                    <div className="lz">Lz Dev</div>
                </a>

                <ul className="navlinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#About">Sobre</a></li>
                    <li><a href="#Services">Expertise</a></li>
                    <li><a href="#Portfolio">Portfólio</a></li>
                </ul>

                <div className="nav-right">
                    <a href="#Contact" className="btn">Contato</a>
                </div>
            </div>
        </nav>
    )
}
export default Nav