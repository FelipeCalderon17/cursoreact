import React, { useState, useEffect } from "react";

const ConsumirApi2 = () => {
  const [imagen, setImagen] = useState([]);
  const leerApi = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setImagen(res);
      });
  };
  useEffect(() => {
    leerApi();
  });
  //renderizado
  return (
    <>
      {imagen.map((img) => {
        return (
          <div className="card w-25">
            <img src={img.thumbnailUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{img.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ConsumirApi2;
