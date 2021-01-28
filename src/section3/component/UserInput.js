import React from 'react';

const userInput = (props) => {
  const name = props.name;
  const change = props.change;

  return (
    <div>
      <input type='text' onChange={change} value={name}></input>
    </div>
  );
};

export default userInput;
