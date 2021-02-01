import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxiliary>
        <h3>주문 내역</h3>
        <p>선택하신 재료: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>총 결제 금액 : {this.props.price.toLocaleString()}</strong>
        </p>
        <p>주문을 계속 하시겠습니까?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>
          취소
        </Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>
          확인
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
