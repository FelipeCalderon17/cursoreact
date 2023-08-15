import React, { useState } from "react";

const Banner = () => {
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Las mejores compras !</h1>
            <p className="lead fw-normal text-white-50 mb-0">Con los mejores precios</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
