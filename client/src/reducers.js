import { combineReducers } from 'redux'

let initialState = {
  parameters: {
    initialSavings: 0,
    monthlySavings: 0,
    interestRate: 0
  },
  projection: {
    loading: false,
    loaded: false,
    data: []
  }
};

let parametersReducer = (state = initialState.parameters, action) => {
  return state;
};

let projectionReducer = (state = initialState.projection, action) => {
  return state;
};

export default combineReducers({
  parameters: parametersReducer,
  projection: projectionReducer
});
