import React, { useState } from "react";

const Tabla = () => {
  const [tabla, setTabla] = useState("");
  let hacerTabla = () => {
    let n = 10;
    for (let index = 1; index <= n; index++) {
      let res = n * index;
      setTabla(
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {n}x{index}
                </th>
                <td>{res}</td>
              </tr>
              <tr>
                <th scope="row">
                  {n}x{index}
                </th>
                <td>{res}</td>
              </tr>
            </tbody>
          </table>
        </>
      );
    }
  };
  return (
    <>
      <button type="button" onClick={hacerTabla} className="btn btn-primary">
        Tabla del 10
      </button>
      <table>{tabla}</table>
    </>
  );
};

export default Tabla;
