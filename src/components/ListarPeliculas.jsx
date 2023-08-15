import React, { useState, useEffect } from "react"; //UseEffect reemplaza al onload
const ListarPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const leerLS = () => {
    //Metodo que lee
    let datos = JSON.parse(localStorage.getItem("pelicula"));
    setPeliculas(datos);
    /* console.log(datos); */
  };
  //Metodo de carga inicial del componente
  useEffect(() => {
    leerLS();
  }, []);
  //Render
  return (
    <>
      <section id="content" className="content">
        {peliculas.map((pelicula) => {
          return (
            <article className="peli-item" key={pelicula.id}>
              <h3 className="title">{pelicula.titulo}</h3>
              <p className="description">{pelicula.descripcion}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default ListarPeliculas;
