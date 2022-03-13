import React from 'react';

//Con esta funcion a la cual llamaremos tanto en el Home como en DetailsTracks como en FavoritesTracks
//lo que hacemos es pintar el Footer sacado de Bootstrap
const Footer = () =>{
    return(
        <nav className="navbar navbar-dark bg-danger mb-4">
            <p className="navbar-brand mx-auto">Grupo 2 DWEC</p>
        </nav>
    )
}
export default Footer;