import React from 'react';

const AccessButton = (props) => {
  const clientID = process.env.REACT_APP_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT;

  const accessUrl = `https://api.instagram.com/oauth/authorize/?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=token&scope=public_content`;

  return (
    <a href={accessUrl}>{props.text}</a>
  )
}

export default AccessButton;