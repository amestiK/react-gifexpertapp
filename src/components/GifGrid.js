// import React, { useState, useEffect } from "react";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  // Desestructurar la respuesta de nuestro hook que contiene la llamada de la api a traves del helpers en variables para luego mostrar la imagen
  const {data:images, loading} = useFetchGifs( category );

  return (
    <>
    {/* Desplegamos el nombre de la categoria */}
    <h3 className="animate__animated animate__fadeIn" >{category}</h3>

    {/* Operador ternario que muestra el loading en caso de que la variable sea true y en caso contratio entrega false y no muestra */}
    {loading && <p className="animate__animated animate__flash">Loading</p>}
    
      <div className="card-grid">  
        {
          // Recorremos el contenido que nos entrega el hook y llamamos al componente GifGridItem para asignarlos a un img y a un p
        images.map( img => (
          <GifGridItem 
          key={ img.id }
          {...img }/>))
        } 
      </div>
    
    </>
  );
};
