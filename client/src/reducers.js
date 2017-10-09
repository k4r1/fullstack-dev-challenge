import { combineReducers } from 'redux'

let initialState = {
  parameters: {
    initialSavings: 0,
    monthlySavings: 0,
    interestRate: 0,
    interestPeriod: 1
  },
  projection: {
    loading: false,
    loaded: false,
    data: []
  }
};

let parametersReducer = (state = initialState.parameters, action) => {
  if (action.type === "PARAM_CHANGE") {
    let newstate = {...state};
    newstate[action.key] = action.value;

    return newstate;
  } else {
    return state;
  }
};

let projectionReducer = (state = initialState.projection, action) => {
  switch (action.type) {
    case "PROJECTION_LOADING":
      return {...state, loading: true};
    case "PROJECTION_LOADED":
      return {...state, loading: false, loaded: true, data: action.data};
    case "PROJECTION_ERROR":
      return {...state, loading: false, loaded: false};
    default:
      return state;
  }
};

export default combineReducers({
  parameters: parametersReducer,
  projection: projectionReducer
});
