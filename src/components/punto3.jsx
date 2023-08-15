import React, { useState } from "react";

const Tercero = () => {
  let year = new Date();
  const [fechaActual, setFecha] = useState(year.getFullYear());
  const aumentarYear = () => {
    setFecha(fechaActual + 1);
  };
  const disminuirYear = () => {
    setFecha(fechaActual - 1);
  };
  const cambiarYear = (e) => {
    setFecha(parseInt(e.target.value));
    if (e.target.value === "") {
      setFecha(year.getFullYear());
    }
  };
  return (
    <>
      <span>Año usando clase date: {fechaActual}</span>
      <br />
      <button className="btn btn-success" onClick={aumentarYear}>
        Aumentar Año
      </button>
      <button className="btn btn-danger ms-2" onClick={disminuirYear}>
        Disminuir Año
      </button>
      <br />
      <p>Cambiar el año con input</p>
      <br />
      <input type="text" className="form-control" onKeyUp={cambiarYear} />
    </>
  );
};

export default Tercero;
