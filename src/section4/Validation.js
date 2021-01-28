import React from 'react';

const validation = (props) => {
  let length = props.length;
  return (
    <div>
      <p>{length > 5 ? 'Too long' : 'Too short'}</p>
    </div>
  );
};

export default validation;
