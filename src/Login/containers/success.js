import React from 'react';

import AccessButton from '../components/access-button';
import { setSession } from '../../utils/webstorage';

const Success = (props) => {
  const urlParams = props.location.search;

  // error url params returned
  if (urlParams) {
    const urlParamsItems = urlParams.split('&');

    if (urlParamsItems[0] === "?error=access_denied") {
      return (
        <div>
          <p>El usuario no dió acceso a la aplicación.</p>
          <AccessButton text="Intentar de nuevo"/>
        </div>
      );
    }
  }

  // hash returnned
  const hash = props.location.hash;

  const split = hash.split('=');
  const token = split[0] === '#access_token' ? split[1] : null;

  if (token) {
    if(setSession(token)) props.history.push('/');
  }

  return (
    <p>Ocurrió un error al acceder.</p>
  );

}

export default Success;