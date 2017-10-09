import { combineReducers } from 'redux'

let initialState = {
  parameters: {
    initialSavings: 10,
    monthlySavings: 10,
    interestRate: 0.8,
    interestPeriod: 1
  },
  projection: {
    loading: false,
    loaded: false,
    data: [],
    currency: 'GBP'
  },
  conversion: {
    loading: false,
    loaded: false,
    base: 'GBP',
    rates: {'GBP': 1}
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
    case "PROJECTION_CURRENCY_CHANGE":
      return {...state, currency: action.curr}
    default:
      return state;
  }
};

let conversionReducer = (state = initialState.conversion, action) => {
  switch (action.type) {
    case "CONVERSION_LOADING":
      return {...state, loading: true};
    case "CONVERSION_LOADED":
      return {...state, loading: false, loaded: true, rates: action.data.rates};
    case "CONVERSION_ERROR":
      return {...state, loading: false, loaded: false};
    default:
      return state;
  }
}

export default combineReducers({
  parameters: parametersReducer,
  projection: projectionReducer,
  conversion: conversionReducer
});
