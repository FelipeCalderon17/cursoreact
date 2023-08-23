import React, { useState } from "react";

const Editar = () => {
  const actualizarInformacion = () => {};
  return (
    <>
      <form onSubmit={actualizarInformacion} className="edit_form">
        <input type="text" name="titulo" id="titulo" className="edit_form" />
        <input type="text" name="descripcion" id="descripcion" className="edit_form" />
        <input type="submit" value="Actualizar" />
      </form>
    </>
  );
};

export default Editar;
