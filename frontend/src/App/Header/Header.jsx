import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container logo-nav-container">
                <a href="#" className="logo">Kolvintrícula</a>
                <span className="menu">Ver/ocultar menú</span>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};
export default Header;