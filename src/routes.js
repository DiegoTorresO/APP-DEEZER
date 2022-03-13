import React,{Component} from 'react';
import {Routes,Route} from 'react-router-dom';
import DetailsTrack from './components/DetailsTrack';
import FavoritesTracks from './components/FavoritesTracks';
import Home from './components/Home';

//Aqui definimos las rutas de las diferentes paginas que van a salir en la aplicacion
class Routess extends Component{
   render(){
       return(
            <Routes>
               {/* Esta seria para la pagina principal (home) */}
               <Route path="/" element={<Home/>} exact/>
               {/* Esta seria para la pagina en la que vemos los detalles de la cancion (DetailsTrack) */}
               <Route path="/details/:id" component={DetailsTrack} element={<DetailsTrack/>} exact/>
               {/* Esta seria para la pagina en la que vemos las canciones añadidas a favoritos (FavoritesTracks) */}
               <Route path="/favorites" element={<FavoritesTracks/>} exact/>
            </Routes>
       )
   }
}
export default Routess;