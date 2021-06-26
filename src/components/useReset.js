import React, { useState } from "react";

const useReset = (valoresIniciais, validate, setCurrentId) => {
  const [values, setValues] = useState(valoresIniciais);
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setValues({
      ...valoresIniciais,
    });
    setErrors({});
    setCurrentId(0);
  };

  return {
    resetForm,
  };
};

export default useReset;
