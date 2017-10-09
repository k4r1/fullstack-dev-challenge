import { connect } from 'react-redux'

import Projection from '../components/Projection';

let mapStateToProps = (state) => {
  return state.projection;
};

let mapDispatchToActions = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToActions)(Projection);
