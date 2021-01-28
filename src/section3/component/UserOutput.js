import React from 'react';

const userOutput = (props) => {
  const name = props.name;
  const age = props.age;

  return (
    <div>
      <p>Hello, {name}</p>
      <p>I'm {age} years old!</p>
    </div>
  );
};

export default userOutput;
