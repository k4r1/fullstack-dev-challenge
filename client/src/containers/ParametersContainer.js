import { connect } from 'react-redux'

import Parameters from '../components/Parameters';

let mapStateToProps = (state) => {
  return state.parameters;
};

let mapDispatchToActions = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToActions)(Parameters);
