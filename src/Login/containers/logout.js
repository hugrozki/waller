import React from 'react';

import { closeSession } from '../../utils/webstorage';

const Logout = (props) => {
  if(closeSession()) props.history.push('/login/');

  return (
    <p>Ocurrió un error.</p>
  );
}

export default Logout;