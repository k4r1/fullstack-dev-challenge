import { connect } from 'react-redux'

import Projection from '../components/Projection';

let mapStateToProps = (state) => {
  return {...state.projection, rates: state.conversion.rates, base: state.conversion.base};
};

let mapDispatchToActions = (dispatch) => {
  return {
    setDisplayCurrency: (curr) => {
      dispatch({type: "PROJECTION_CURRENCY_CHANGE", curr});
    },
    getConversionInfo: (base) => {
      dispatch({type: "CONVERSION_LOADING"});
      fetch(`http://api.fixer.io/latest?base=${base}`)
        .then((data) => data.json())
        .then((data) => {
          if (!!data.rates) {
            let baseRate = {}; baseRate[base] = 1;

            data.rates = {...baseRate, ...data.rates};
            dispatch({type: "CONVERSION_LOADED", data});
          } else {
            dispatch({type: "CONVERSION_ERROR"});
          }
        })
        .catch((error) => {
          dispatch({type: "CONVERSION_ERROR"});
        })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToActions)(Projection);
