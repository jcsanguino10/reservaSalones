import React, { Component } from 'react';
import style from './Menu.css';
import Aulas from './Aulas';
import Reservas from './Reservas';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            funcion: "Reserva"
        }
        this.cambiarEstado = this.cambiarEstado.bind(this);
        this.visualizarContenido = this.visualizarContenido.bind(this);
    }

    cambiarEstado(estado) {
        this.setState({
            funcion :  estado 
        });     
    }

    visualizarContenido(){
        const estado = this.state.funcion;
        if(estado =='Aulas')
        {
            return <Aulas/>;
        }
        else if(this.state.funcion =='Reserva')
        {
            return <Reservas/>;
        }
        else{
            return <Aulas/>
        }
    }
    render() {
        return (
            <div>
                {/** Barra de navegacion */}
                <nav className="navbar navbar-expand-lg navbar-dark" id="navegacion">
                    <a className="navbar-brand" href="#" onClick={() => this.cambiarEstado("Reserva")}>Reservas</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={()=> this.cambiarEstado("Aulas")}>Aulas</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#">Reportes</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
                {this.visualizarContenido()}
            </div>
        );
    }
}
export default Menu;