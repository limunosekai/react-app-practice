import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get(
    //     'https://react-burger-e72d1-default-rtdb.firebaseio.com/ingredients.json'
    //   )
    //   .then((response) => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: true });
    //   });
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((total, el) => {
        return total + el;
      }, 0);
    // 0보다 크면 true, 작으면 false
    // this.setState({ purchasable: sum > 0 });
    return sum > 0;
  };

  // addIngredientHandler = (type) => {
  //   // ingredient update
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredient = {
  //     ...this.state.ingredients,
  //   };
  //   updatedIngredient[type] = updatedCount;
  //   // price update
  //   const priceAddition = INGREDIENT_PRICE[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({
  //     ingredients: updatedIngredient,
  //     totalPrice: newPrice,
  //   });
  //   this.updatePurchaseState(updatedIngredient);
  // };

  // removeIngredientHandler = (type) => {
  //   // ingredient update
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) return;
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredient = {
  //     ...this.state.ingredients,
  //   };
  //   updatedIngredient[type] = updatedCount;
  //   // price update
  //   const priceDeduction = INGREDIENT_PRICE[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.setState({
  //     ingredients: updatedIngredient,
  //     totalPrice: newPrice,
  //   });
  //   this.updatePurchaseState(updatedIngredient);
  // };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // const query = [];
    // for (let i in this.state.ingredients) {
    //   query.push(
    //     encodeURIComponent(i) +
    //       '=' +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // }
    // query.push('price=' + this.props.price);
    // const queryString = query.join('&');
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + queryString,
    // });
    this.props.history.push('/checkout');
  };

  render() {
    // 객체 복사
    const disabledInfo = {
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      // true or false boolean 저장
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Loading!</p> : <Spinner />;
    if (this.props.ings) {
      burger = (
        <Auxiliary>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            price={this.props.price}
            ordered={this.purchaseHandler}
          />
        </Auxiliary>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: ingName,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
