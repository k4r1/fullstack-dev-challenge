import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Parameters.css'

import CurrencyInput from './CurrencyInput'
import SliderInput from './SliderInput'

class Parameters extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleRadioButton = this.handleRadioButton.bind(this);
  }
  componentWillReceiveProps(p) {
    this.props.updateProjection(p);
  }
  handleChange(key) {
    return (value) => this.props.onValueChange(key, value);
  }
  handleRadioButton(key, value) {
    return () => this.handleChange(key)(value);
  }
  render () {
    return (
      <div className="financial-inputs">
        <div>
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput defaultValue={0} onChange={this.handleChange("initialSavings")}/>
        </div>
        <div>
          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput defaultValue={0} onChange={this.handleChange("monthlySavings")}/>
        </div>
        <div>
          <p className="input-label">What is your annual interest rate?</p>
          <SliderInput
            min={0}
            max={10}
            step={0.25}
            unit="%"
            defaultValue={0}
            onChange={this.handleChange("interestRate")}
          />
        </div>
        <div>
          <p className="input-label">How often is your interest paid per year?</p>
          <p>
            <input
              type="radio"
              checked={this.props.interestPeriod === 1}
              onChange={this.handleRadioButton("interestPeriod", 1)}/>
            Monthly
          </p>
          <p>
            <input
              type="radio"
              checked={this.props.interestPeriod === 3}
              onChange={this.handleRadioButton("interestPeriod", 3)}/>
            Quarterly
          </p>
          <p>
            <input
              type="radio"
              checked={this.props.interestPeriod === 12}
              onChange={this.handleRadioButton("interestPeriod", 12)}/>
            Annually
          </p>
        </div>
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
