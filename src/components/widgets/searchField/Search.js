import React,{Component} from 'react'

//Esta componente de clase al que llamaremos solo en el Home nos sirve para realizar busquedas
class Search extends Component{
// Aqui definimos la variable que vamos a usar con el valor al que le vamos a meter diferentes cosas
    state = {
        term : ''
    }

    //En esta funcion le asignamos a term el valor que será lo introducido dentro del campo de busqueda
    handleInputChange = (event) => {
        this.setState({term : event.target.value})
    }
    //Esta funcion hace que se produzca el evento de busqueda
    submitSearch = (event) =>{
        event.preventDefault();
        let {term} = this.state;
        this.props.searchTracks(term);
    }
    //Esto va a ser lo que va a devolver como tal el componente de clase
    render(){
        return(
            <div className="search mb-2">
                <form onSubmit={(event) => this.submitSearch(event)}>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="form-group">
                                <input
                                    value={this.state.term}
                                    onChange={(event) => this.handleInputChange(event)}
                                    type="text"
                                    className="form-control p-4"
                                    placeholder="Buscar"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <button className="btn btn-danger"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;