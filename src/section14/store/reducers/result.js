import * as actionType from '../actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === actionType.STORE) {
    return {
      ...state,
      results: state.results.concat({
        id: new Date(),
        value: action.result,
      }),
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
