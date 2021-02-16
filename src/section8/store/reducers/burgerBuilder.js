import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 2900,
  error: false,
};

const INGREDIENT_PRICE = {
  salad: 300,
  cheese: 1000,
  meat: 1500,
  bacon: 800,
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
  };
  return updateObject(state, updatedSt);
};

const setIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 2900,
    error: false,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  // utility를 이용하여 switch 쪼개기
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENTS:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredient(state, action);
    //이전 코드 형식
    // return {
    //   ...state,
    //   ingredients: {
    //     salad: action.ingredients.salad,
    //     bacon: action.ingredients.bacon,
    //     cheese: action.ingredients.cheese,
    //     meat: action.ingredients.meat,
    //   },
    //   totalPrice: 2900,
    //   error: false,
    // };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
