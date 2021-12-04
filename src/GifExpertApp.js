import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["Death note"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* Importamos el componente, desplegara el input que estamos creando. */}
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          // Recorremos los elementos del category y los desplegamos a traves del componente GifGrid
        categories.map(category => 
            <GifGrid 
            key= {category}
            category = { category }/>)
        }
      </ol>
    </>
  );
};
