import React, { useState } from "react";

const Eventos2 = () => {
  //let nombre = "Walarias"; this definition won´t answer to the event, instead we should use usestate hook
  const [nombre, setNombre] = useState("Walarias");
  const cambiarNombre = () => {
    setNombre("IAS Calde brr");
  };
  const cambiarLetras = (e) => {
    setNombre(e.target.value);
  };
  //Render
  return (
    <>
      <h1>Eventos 2</h1>
      <p className="bg-info p-3">{nombre}</p>
      <button className="btn btn-success" onClick={cambiarNombre}>
        Cambiar
      </button>
      <br />
      Escribe el nombre: <input type="text" className="form-control" onKeyUp={cambiarLetras} />
    </>
  );
};

export default Eventos2;
