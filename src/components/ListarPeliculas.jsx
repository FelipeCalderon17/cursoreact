import React, { useEffect } from "react"; //UseEffect reemplaza al onload
import Editar from "./Editar";
const ListarPeliculas = ({ datos, setDatos }) => {
  const leerLS = () => {
    //Metodo que lee
    let peliculas = JSON.parse(localStorage.getItem("pelicula"));
    setDatos(peliculas);
    return peliculas;
    /* console.log(datos); */
  };
  const borrarPelicula = (id) => {
    //Leer localstorage y la transformamos en un arreglo
    let bdatos = leerLS();
    //creamos un nuevo array filtrandoo por el id
    let bdNueva = bdatos.filter((peliculas) => peliculas.id !== parseInt(id));
    //actualizamos el estado del componente principal en APP
    setDatos(bdNueva);
    localStorage.setItem("pelicula", JSON.stringify(bdNueva));
  };
  //Metodo de carga inicial del componente
  useEffect(() => {
    leerLS();
  }, []);
  //Render
  return (
    <>
      <section id="content" className="content">
        {/*TODO: Revisar que la condicion no funciona ocasionalmente*/}
        {datos === null || datos.length === 0 ? (
          <>
            <h2>No hay peliculas en la base de datos</h2>
          </>
        ) : (
          <>
            {datos.map((pelicula) => {
              return (
                <article className="peli-item" key={pelicula.id}>
                  <h3 className="title">{pelicula.titulo}</h3>
                  <p className="description">{pelicula.descripcion}</p>
                  <button className="edit">Editar</button>
                  <button
                    className="delete"
                    onClick={() => {
                      borrarPelicula(pelicula.id);
                    }}
                  >
                    Borrar
                  </button>
                  <Editar />
                </article>
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default ListarPeliculas;
