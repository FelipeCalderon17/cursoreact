import React from "react";

const Eventos = () => {
  const mostrarMensaje = (e) => {
    console.log(e.target.value); //Usamos (e) en js para obtener las propiedades del evento
    console.log("Que chimba SOG");
  };
  //Render
  return (
    <>
      <h1>Control de eventos</h1>
      <hr />
      <img src="./images/champi.jpg" alt="" className="img-fluid" onMouseOver={mostrarMensaje} />
    </>
  );
};

export default Eventos;
