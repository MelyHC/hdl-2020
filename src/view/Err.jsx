import React from 'react';
import { useHistory } from 'react-router-dom';

const Err = () => {

  const history = useHistory();
  const back = () => history.goBack();

  return (
    <>
      <h2>404</h2>
      <h1>Página no encontrada </h1>
      <p> El archivo especificado no se encontró en este sitio web. Por favor compruebe el URL para errores y vuelva a intentarlo.</p>
      <button onClick={back}> Regresar atras </button>
    </>
  )
}

export default Err;