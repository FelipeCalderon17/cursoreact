import React, { Component } from "react";
export default class Navbar extends Component {
  state = { nombre: "agogo", edad: 23, valor1: 5, valor2: 18, resultado: null };
  style = {
    fontWeight: "bold",
    fontSize: 25,
  };
  sumar = () => {
    this.setState({ resultado: this.state.valor1 + this.state.valor2 });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <span className="me-2 ms-2">Numero 1:</span>
          <input type="text" className="form-control w-25 me-1" />
          <span className="me-2 ms-2">Numero 2:</span>
          <input type="text" className="form-control w-25 me-1" />
          <button onClick={this.sumar} className="btn btn-primary me-2">
            Sumar
          </button>
          <span>la suma es: {this.state.resultado}</span>
        </nav>
      </div>
    );
  }
}
