//Primer componente contador
//[]= atajos de teclado
import React, { Component } from "react"; //importa el componente base de react [imrc]
//[cc] crear class components
//Usamos el estilo orientado a objetos, se puede tambien usando solo funciones con el metodo return
export default class Contador extends Component {
  state = { contador: 10, nombre: "Agogo Agogo", imagen: "https://picsum.photos/200" }; //Atributos,estados
  //A partir de aqui van los metodos de la clase
  style = {
    fontWeight: "bold",
    fontSize: 25,
  };
  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  restarContador = () => {
    this.setState({ contador: this.state.contador - 1 });
  };
  render() {
    return (
      <div>
        <span style={this.style} className="badge bg-secondary">
          {this.state.contador}
        </span>
        <button onClick={this.incrementarContador} className="btn btn-primary">
          Sumar
        </button>
        <button onClick={this.restarContador} className="btn btn-primary">
          Restar
        </button>
        <img src={this.state.imagen} alt="laMejorImagen" />
      </div>
    );
  }
}
