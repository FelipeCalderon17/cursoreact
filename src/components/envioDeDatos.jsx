import React from "react";
/* const EnvioDatos = (props) => { */
const EnvioDatos = (props) => {
  //Enviando datos entre componentes usando el objeto js llamado props
  return (
    <>
      <h1>Hola {props.nombre}</h1>
      {/* desplegamos usando props */}
    </>
  );
};

export default EnvioDatos;
