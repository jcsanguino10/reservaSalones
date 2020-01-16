import React, { Component } from 'react';
import Menu from './components/Menu';
import style from './App.css';
import './imagenes/customLogo.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      estado: "Estudiante"
    }
  }
  componenteActual() {

    const componente = [];
    if (this.state.estado === "Estudiante") {
      componente.push(<Menu key="Estudiante" />)
    }
    return componente;
  }
  render() {
    return (
      <div>
        <header>
          <div className="container-fluid">
            <img className="ml-2 my-3" src={require("./imagenes/customLogo.png")} alt=" " id="logo"></img>
            <div className="d-inline-flex ml-4 my-3">
              <div>
                <p className="h3 text-light my-0"> Escuela de Postgrados de Policía Miguel Antonio Lleras Pizarro </p>
                <p className="my-0 text-light">Asignación de espacios</p>
              </div>
            </div>
          </div>
        </header>
        {this.componenteActual()}
      </div>
    );
  }
}

export default App;
