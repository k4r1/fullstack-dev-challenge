import { connect } from 'react-redux'

import Parameters from '../components/Parameters';

let mapStateToProps = (state) => {
  return state.parameters;
};

let mapDispatchToActions = (dispatch) => {
  return {
    onValueChange: (key, value) => {
      dispatch({type: "PARAM_CHANGE", key, value});
      dispatch({type: "PROJECTION_LOADING"});
      setTimeout(() => {
        dispatch({type: "PROJECTION_LOADED"});
      }, 500);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToActions)(Parameters);
