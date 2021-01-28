import React from 'react';

const character = (props) => {
  let msg = props.msg;
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
  };

  return (
    <div style={style} onClick={props.onClick}>
      {msg}
    </div>
  );
};

export default character;
