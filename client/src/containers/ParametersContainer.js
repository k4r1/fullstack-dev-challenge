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
      fetch(`http://localhost:3001/api/projection?initial=${values.initialSavings}&monthly=${values.monthlySavings}&interest=${values.interestRate}&period=${12 / values.interestPeriod}&months=600`)
        .then((data) => data.json())
        .then((data) => {
          dispatch({type: "PROJECTION_LOADED", data});
        })
        .catch((error) => {
          dispatch({type: "PROJECTION_ERROR"});
        })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToActions)(Parameters);
