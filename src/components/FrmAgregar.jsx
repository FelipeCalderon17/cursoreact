import React from "react";

const FrmAgregar = ({ datos, setDatos }) => {
  //Objeto y metodo de inicializacion para tomar los datos del formulario
  //Metodo paraa obtener los datos del form y crea un objeto y lo setea en la variable datos
  //Metodo que va a guardaar las peliculas en el localstorage
  const salvarLocal = (datos) => {
    //leemos la info del localStorage
    let elementos = JSON.parse(localStorage.getItem("pelicula"));
    //Agregamos al localstorage
    if (Array.isArray(elementos)) {
      elementos.push(datos);
    } else {
      elementos = [datos];
    }
    setDatos(elementos);
    localStorage.setItem("pelicula", JSON.stringify(elementos));
  };
  const getDatosFrm = (e) => {
    e.preventDefault(); //Para evitar la recarga automatica
    let titulo = e.target.titulo.value; //el e.target es el objetivo que dispara el evento y se llaman por los ID
    let descripcion = e.target.descripcion.value;
    let datos = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion: descripcion,
    };
    setDatos(datos);
    salvarLocal(datos);
  };
  //Render del modulo
  return (
    <>
      <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <form onSubmit={getDatosFrm}>
          <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
          <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};

export default FrmAgregar;
