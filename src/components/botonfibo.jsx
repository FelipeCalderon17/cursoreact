import React, { useState } from "react";

const Botonfibo = () => {
  const [resultado, setResultado] = useState(0);
  let factorial = () => {
    let res = 5;
    for (let index = 4; index > 0; index--) {
      res = res * index;
      setResultado(res);
    }
  };

  return (
    <>
      <button type="button" onClick={factorial} className="btn btn-primary">
        Secuencia
      </button>
      <span> el resultado es: {resultado}</span>
    </>
  );
};

export default Botonfibo;
