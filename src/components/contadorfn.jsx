import React, { useState } from "react"; //[imrs] importa el uso de estado de react

//[SFC] Crear la funcion directamente
const Contadorfn = () => {
  //Variables: usando hooks de estado
  //Los hooks nos dejan trabajar sin clases
  const [contador, setContador] = useState(0);

  let aumentar = () => setContador(contador + 1);
  let disminuir = () => setContador(contador - 1);
  //renderización del componente
  return (
    <>
      <div className="row">
        <div className="col-3">
          <span className="badge bg-secondary">{contador}</span>
        </div>
        <div className="col-6">
          {" "}
          <button type="button" onClick={aumentar} className="btn btn-primary">
            +
          </button>
          <button type="button" onClick={disminuir} className="btn btn-danger">
            -
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contadorfn;
