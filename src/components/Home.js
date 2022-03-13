import React,{Component} from 'react'
import './Home.css';
import Search from './widgets/searchField/Search';
import * as actions from '../actions/index';
import {Link} from 'react-router-dom';
import Header from './widgets/header/Header';
import Footer from './widgets/footer/Footer';
import swal from 'sweetalert';

//Este componente nos va a mostrar el inicio de la aplicacion
class Home extends Component{
    state = {
        tracks : [],
        term : '',
        show : false,
    }
    //Esto lo que hace es mostrarnos todas las canciones basandose en el parametro que le hemos asignado 
    //en actions/index
    componentDidMount(){
        actions.getTracks().then(item => this.setState({tracks:item}));
    }
    //y esto lo que haria sería mostrarnos las canciones pero esta vez basandose en el parametro que nosotros
    //mismos le he hemos pasado (term)
    searchTracks = (term) => {
        actions.getTracks(term).then(item => this.setState({tracks:item}));
    }
    //Con esta funcion añadimos canciones a favoritos y podemos tambien checkear si la cancion ya está añadida a favoritos
    addToFavorites = (track) => {
        //console.log(album.album.id);
        let oldFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if(this.checkTrack(oldFavorites,track)){
            swal({
                title: "Ya Existe!",
                text: "La cancion ya existe en tus favoritos!",
                icon: "warning",
            });
            return false;
        }
        oldFavorites.push(track);
        let favorites = oldFavorites;
        localStorage.setItem('favorites',JSON.stringify(favorites));
        swal({
            title: "Canción añadida!",
            text: "Canción añadida a favoritos!",
            icon: "success",
        });
    }
    //Con esto checkeamos el id
    checkTrack = (tracks,track) => {
        var found = tracks.some(function (item) {
            return item.id === track.id;
        });
        return found;
    }
    //Aqui manejamos lo que vamos a sacar de la API
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
                            <Link to={`/details/${item.id}`} className="link"><i class="fa-solid fa-play text-info"></i></Link>
                            <a onClick={() => this.addToFavorites(item)} className="link"><i class="fa-solid fa-heart text-danger"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        ))
        : null;
    }
    //Y esto sería lo que pintariamos en pantalla
    render(){
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header/>
                        {/* Con esto hariamos uso del buscador */}
                        <Search searchTracks={this.searchTracks}/>
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

export default Home;