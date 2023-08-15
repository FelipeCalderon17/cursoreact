import React from "react";
/* const EnvioDatos = (props) => { */
const EnvioDatos2 = ({ nombre, edad }) => {
  //Enviando datos entre componentes usando destructuring
  return (
    <>
      <h1>
        Hola <br /> <hr /> {nombre} <br /> tienes {edad} años
      </h1>
    </>
  );
};

export default EnvioDatos2;
