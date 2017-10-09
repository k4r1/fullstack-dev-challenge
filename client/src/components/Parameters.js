import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Parameters.css'

import CurrencyInput from './CurrencyInput'
import SliderInput from './SliderInput'

class Parameters extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(p) {
    this.props.updateProjection(p);
  }
  handleChange(key) {
    return (value) => {
      this.props.onValueChange(key, value);
    }
  }
  render () {
    return (
      <div className="financial-inputs">
        <p className="input-label">How much have you saved?</p>
        <CurrencyInput defaultValue={0} onChange={this.handleChange("initialSavings")}/>

        <p className="input-label">How much will you save each month?</p>
        <CurrencyInput defaultValue={0} onChange={this.handleChange("monthlySavings")}/>

        <p className="input-label">How much interest will you earn per year?</p>
        <SliderInput defaultValue={0} onChange={this.handleChange("interestRate")}/>
      </div>
    )
  }
}

Parameters.propTypes = {
  initialSavings: PropTypes.number,
  monthlySavings: PropTypes.number,
  interestRate: PropTypes.number,
	onValueChange: PropTypes.func.isRequired,
	updateProjection: PropTypes.func.isRequired
}

export default Parameters;
