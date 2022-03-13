import React,{Component} from 'react'
import './Home.css';
import * as actions from '../actions/index';
import {Link} from 'react-router-dom';
import Header from './widgets/header/Header';
import Footer from './widgets/footer/Footer';
import swal from 'sweetalert';

//Este componente de clase nos pintaría las canciones que han sido guardadas en favoritos anteriormente 
class FavoritesTracks extends Component{
    state = {
        tracks : [],
    }
    //Llamamos a la funcion creada dentro de actions/index para sacar del LocalStorage las canciones añadidas y las parseamos
    //para convertirlas en JSON
    componentWillMount(){
        let favorites = actions.getFavoritesTracks();
        this.setState({
            tracks : JSON.parse(favorites)
        })
        // console.log(this.state);
    }


    //Esta funcion la hemos configurado para poder eliminar del LocalStorage las canciones añadidas
    outofFavorites = (track) => {
        //console.log(album.album.id);
        //Metemos dentro de la variable oldFavorites lo que haya dentro del LocalStorage
        let oldFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
       //Con la funcion checkTrack sacamos la cancion a traves del id de la cancion que hemos seleccionado
        if(this.checkTrack(oldFavorites,track)){
            //Con el sweetalert sacamos una ventanita que nos muestre lo siguiente
            swal({
                title: "Retirada!",
                text: "La cancion se ha retirado de tus favoritos!",
                icon: "error",
                //Para que nos recargue la pagina en cuanto le demos al boton de la ventana que nos muestra el 
                //sweetalert lo metemos dentro.
            }).then(function(){
                window.location.reload(false);
            })
            
            console.log(track);
            console.log(track.id)
            console.log(oldFavorites.findIndex(x=>x.id===track.id));
            //Esto es una funcion que encontré por internet que lo que hace es meter dentro de id el id de la cancion
            let id = oldFavorites.findIndex(x=>x.id===track.id);
            //Y esto lo que hace es eliminar la cancion asociada a ese id
            oldFavorites.splice(id, 1);
            //Y por ultimo volvemos a cargar los favoritos en el localstorage pero esta vez sin la cancion que hemos eliminado.
            localStorage.setItem('favorites',JSON.stringify(oldFavorites));
            
        }
        
    }

    //Pilla la cancion y le saca el id
    checkTrack = (tracks,track) => {
        var found = tracks.some(function (item) {
            return item.id === track.id;
        });
        return found;
    }
    //Aqui manejariamos la informacion del objeto track sacado anteriormente en el componentwillmount
    renderTracks = () => {
        // console.log(this.state);
        const {tracks} = this.state;
        return tracks && tracks.length ?
            tracks.map((item,index) => (
            <div  key={index} className="col-md-4 mb-2">
                <div className="card border-danger">
                    <img src={item.album.cover_big} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <span className="text-primary">{item.artist.name} </span>
                        <div className="card-title">
                            {item.title}
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="links">
                            <Link to={`/details/${item.id}`} className="link"><i className="fas fa-info text-info"></i></Link>
                            <a onClick={() => this.outofFavorites(item)} className="link"><i className="fas fa-ban text-info"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        ))
        : null;
    }
    //Y esto sería lo que mostraria de primeras el componente haciendo llamada al rendertracks para que obviamente enseñe las canciones favoritas del usuario
    render(){
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header/>
                            <div className="row">
                                {this.renderTracks()}
                            </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FavoritesTracks;