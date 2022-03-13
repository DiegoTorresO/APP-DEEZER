import axios from 'axios';


//Aquí hacemos llamada de la API, le pasamos la contraseña de la API como una constante 
const API_KEY = '5937441110msh31000535dfaa8d1p1f3485jsnbababf9303d2';
//La llamada a la API la hacemos con AXIOS, basicamente ha sido un copia y pega de la página 
// de donde hemos sacado la API. El timeout le tenemos puesto a 0 para que las llamadas a la 
//propia API se realicen de forma mas rapida
const request = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 0,
    headers: {'X-RapidAPI-Key': API_KEY}
});

//A esta funcion la llamamos en el Home y lo que hace es mostrarnos en el inicio de la aplicacion las canciones con
//una busqueda predeterminada, en este caso le hemos dejado por defecto que nos busque Los Chunguitos
export function getTracks(search = 'Los chunguitos'){
    const track = request.get(`search?q=${search}`)
                    .then(response => response.data.data)
                    .catch(error => console.log(error));
    return track;
}

//Esta funcion lo que hace es llamar al LocalStorage donde tenemos almacenadas las canciones que hemos añadido a favoritos
export function getFavoritesTracks(){
    const tracks = localStorage.getItem('favorites');
    return tracks;
}

//Con esta funcion podemos sacar los datos de una cancion (track) a raiz de su id
export function getTrack(id){
    const track = request.get(`track/${id}`)
                    .then(response => {
                        console.log(response.data);
                        return response.data
                    } )
                    .catch(error => console.log(error));
    return track;
}