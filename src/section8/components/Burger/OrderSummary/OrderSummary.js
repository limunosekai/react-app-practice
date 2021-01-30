import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>주문 내역</h3>
      <p>선택하신 재료: </p>
      <ul>{ingredientSummary}</ul>
      <p>주문을 계속 하시겠습니까?</p>
    </Auxiliary>
  );
};

export default orderSummary;
