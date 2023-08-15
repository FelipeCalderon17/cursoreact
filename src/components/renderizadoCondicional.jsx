import React from "react";

const RenderCondicional = () => {
  let ciudades = ["Cali", "Medellin", "Bogota", "Pereira"];
  /* ciudades = []; */
  //Metodo de renderizado del componente
  return (
    <>
      <h1>COMPONENTE RENDER</h1>
      <hr />
      {ciudades.length > 0 ? (
        <ul>
          {ciudades.map((ciudad, index) => {
            return <li key={index}>{ciudad}</li>;
          })}
        </ul>
      ) : (
        <div className="alert alert-danger" role="alert">
          No hay nada pa mostrar sapaaa
        </div>
      )}
    </>
  );
};

export default RenderCondicional;
