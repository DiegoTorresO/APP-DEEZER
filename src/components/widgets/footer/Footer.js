import React from 'react';

//Con esta funcion a la cual llamaremos tanto en el Home como en DetailsTracks como en FavoritesTracks
//lo que hacemos es pintar el Footer sacado de Bootstrap
const Footer = () =>{
    return(
        <nav className="navbar navbar-dark bg-danger mb-4">
            <p className="navbar-brand mx-auto">Grupo 2 DWEC</p><hr/>
            <a className="navbar-brand mx-auto" href="https://github.com/DiegoTorresO/APP-DEEZER"><i class="fa-brands fa-2x fa-github"></i></a> 
        </nav>
    )
}
export default Footer;