import { connect } from 'react-redux'

import Parameters from '../components/Parameters';

let mapStateToProps = (state) => {
  return state.parameters;
};

let mapDispatchToActions = (dispatch) => {
  return {
    onValueChange: (key, value) => {
      dispatch({type: "PARAM_CHANGE", key, value});
    },
    updateProjection: (values) => {
      dispatch({type: "PROJECTION_LOADING"});
      setTimeout(() => {
        let data = calculateInterest(values);
        dispatch({type: "PROJECTION_LOADED", data});
      }, 500);
    }
  };
}

/* TODO: This will be done server side */
let calculateInterest = (params) => {
  console.log("Calculating Interest");
  function* calculateBalance(o) {
    var acc = params.initialSavings;
    for (let i = 1; i <= o.months; ++i) {
      acc = acc + params.monthlySavings;
      if (i % 12 === 0) {
        acc = acc * (1 + params.interestRate / 100);
      };

      yield {month: i, amount: acc};
    }
  }

  return [...calculateBalance({months: 24})];
}

export default connect(mapStateToProps, mapDispatchToActions)(Parameters);
