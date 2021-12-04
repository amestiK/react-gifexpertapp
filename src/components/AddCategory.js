import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    //Actualiza el valor del input
    setinputValue(e.target.value);
  };

  const handleSumbit = (e) => {
    //Previene el comportamiento por default del formulario (Refrescar la pagina al enviar el formulario)
    e.preventDefault();

    //Añade a la categoria el nuevo elemento agregado y resetea el valor del input.
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [ inputValue, ...cats]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};


//Al llamar el componente solicita que la categoria tenga un valor por default de manera obligatoria
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
