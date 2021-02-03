import React from 'react';
import styles from './Order.module.css';

const Order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
      >
        {ig.name} ({ig.amount}){'  '}
      </span>
    );
  });

  return (
    <div className={styles.Order}>
      <p>재료: {ingredientOutput}</p>
      <p>
        가격: <strong>{(+props.price).toLocaleString()} 원</strong>
      </p>
    </div>
  );
};

export default Order;
