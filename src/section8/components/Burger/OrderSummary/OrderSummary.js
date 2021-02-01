import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
      <p>
        <strong>총 결제 금액 : {props.price.toLocaleString()}</strong>
      </p>
      <p>주문을 계속 하시겠습니까?</p>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>
        취소
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        확인
      </Button>
    </Auxiliary>
  );
};

export default orderSummary;
