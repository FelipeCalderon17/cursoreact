import React, { useState, useEffect } from "react";

const ConsumirApi = () => {
  const [usuarios, setUsuarios] = useState([]);
  const leerApi = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUsuarios(res.data);
        //console.log(usuarios);
      });
  };
  //Es reactivo, es decir consume y actualiza automaticamente al detectar un cambio en la propiedad del componente
  useEffect(() => {
    leerApi();
  });
  //renderizado
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Correo</th>
            <th scope="col">Primer Nombre</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
              <tr>
                <th scope="row">{usuario.email}</th>
                <th scope="row">{usuario.first_name}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/*  <ul>
        {usuarios.map((usuario) => {
          return (
            <li key={usuario.id}>
              {usuario.email} - {usuario.first_name}
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default ConsumirApi;
