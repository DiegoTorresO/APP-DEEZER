import React from 'react';


//Con esta funcion a la cual llamaremos tanto en el Home como en DetailsTracks como en FavoritesTracks
//lo que hacemos es pintar el Header sacado de Bootstrap
//Dentro en cada enlace podremos acceder tanto al inicio de la pagina como a favorites
const Header = () =>{
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-danger">
        <a class="navbar-brand" href="/">App de Musica</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/favorites">Favoritos</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Header;