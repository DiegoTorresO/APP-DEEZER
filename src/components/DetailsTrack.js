import React,{useEffect} from 'react';
import * as actions from '../actions/index';
import Header from '../components/widgets/header/Header';
import Footer from '../components/widgets/footer/Footer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

//Aquí definimos la funcion con la que vamos a mostrar los detalles de cada cancion que pulsemos
const DetailsTrack = () =>{
    //Para pillar la id de la cancion que estará en la url del navegador usamos useParams
    const {id} = useParams();
    //Y aqui definimos la variable que vamos a usar durante la funcion
    const [track, settrack] = useState([ ]);
    
//El useeffect va a ser lo primero que se ejecute y lo que hará basicamente, es pillar el valor de la id de la cancion seleccionada 
//y lo mete dentro de id. Y con el id sacamos todos los datos de la cancion con la funcion getTrack anteriormente hecha dentro de actions/index
   useEffect(() =>{
       console.log(id);
        actions.getTrack(id).then(track =>{
            settrack(track);
        });

   },[]);
   //Aqui con los datos de la cancion ya metidos dentro de track lo que hacemos es sacar el codigo md5 y lo metemos dentro de la variable codigo,
   //la cual usaremos mas abajo
   const codigo = track.md5_image
   
   console.log(codigo)
   console.log(track);
   //Y acontinuacion esto será lo que devuelva el componente como tal
       return(
        <div className="container">
        <div className="row mt-4">
            <div className="col-md-8 mx-auto">
                {/* Aqui hacemos llamada del componente Header para que nos muestre la barra de navegacion */}
                <Header/>
                <div className="row">
                <div className="col-md-12 mb-3">
            <div className="card border-danger">
                {/* Aqui le pasamos el parametro de codigo concatenado con la url general de una imagen de la api de Deezer */}
                <img src={`https://e-cdns-images.dzcdn.net/images/cover/${codigo}/500x500-000000-80-0-0.jpg`} className="card-img-top" alt={track.title}/>
                <div className="card-body">
                    <div className="card-title">
                        {/* Aqui le pasamos tanto la fecha de lanzamiento de la cancion como el titulo de esta */}
                        <h5 className="text-success">{track.release_date}</h5>
                        <h3 className="text-info">{track.title_short}</h3>
                    </div>
                </div>
                <div className="card-footer">
                    {/* Aqui le pasamos por medio de audio un cacho de 30 segundos de la cancion, en el caso de que el navegador del usuario no sea compatible con esta 
                    funcion se le pasará un mensaje en su lugar poniendo que su navegador no lo soporta */}
                <audio
                    controls
                    src={track.preview}>
                        Tu navegador no soporta
                        <code>audio</code>.
                </audio>
                </div>
            </div>
        </div>
                </div>
                {/* Aqui hacemos llamada del componente Footer para que nos muestre pos el Footer */}
                <Footer/>
            </div>
        </div>
    </div>
       )
    }
export default DetailsTrack;