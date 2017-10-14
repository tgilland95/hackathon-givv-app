import ButtonBar from 'material-ui/Button'
import React from 'react';

const LoginButton = ({name}) => (
 <ButtonBar raised  style={{padding:"15px", margin:"10px"}}
 >{name}</ButtonBar>
);

export default LoginButton;