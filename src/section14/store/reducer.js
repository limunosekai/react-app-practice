import * as actionType from './actions';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === actionType.INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === actionType.DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === actionType.ADD) {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  if (action.type === actionType.SUB) {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  }
  if (action.type === actionType.STORE) {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: state.counter }),
    };
  }
  if (action.type === actionType.DELETE) {
    const updatedArray = state.results.filter(
      (result) => result.id !== action.resultElId
    );
    return {
      ...state,
      results: updatedArray,
    };
  }
  return state;
};

export default reducer;
