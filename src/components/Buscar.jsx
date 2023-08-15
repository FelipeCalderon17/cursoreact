import React, { useState } from "react";

const Buscar = () => {
  const [busqueda, setBusqueda] = useState("");
  const buscarPelicula = (e) => {
    let busqueda = e.target.value;
    console.log(busqueda);
    setBusqueda(busqueda);
  };
  //Render
  return (
    <>
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
          <input type="text" id="search_field" name="busqueda" onChange={buscarPelicula} />
          <button id="search">Buscar</button>
        </form>
      </div>
    </>
  );
};

export default Buscar;
