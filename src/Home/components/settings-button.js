import React from 'react';
import './buttton.css';

const SettingsButton = (props) => {
  return (
    <i
      className="fas fa-cog Settings"
      onClick={props.callback}
    />
  );
}

export default SettingsButton;
