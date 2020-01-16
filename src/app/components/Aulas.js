import React, { Component } from 'react';
class Aulas extends Component {
    constructor()
    {
        super();
        this.darAulas = this.darAulas.bind(this);
    }

    darAulas(){
        fetch('api/espacios',{
            method: 'GET',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div className="container-fluid pt-4 px-5 ">
                <nav className="navbar navbar-light pb-3">
                <label className="navbar-brand"></label>
                    <form className="form-inline ">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col"> Salon </th>
                            <th scope="col"> Hora </th>
                            <th scope="col"> Tema </th>
                            <th scope="col"> Profesor</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.darAulas()}
                    </tbody>
                </table>

            </div>
        );
    }
}
export default Aulas;