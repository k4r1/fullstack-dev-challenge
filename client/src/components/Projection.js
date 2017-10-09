import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Projection.css'

import DisplayGraph from './DisplayGraph'

class Projection extends Component {
  constructor(props) {
    super(props);

    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }
  handleCurrencyChange(e) {
    this.props.setDisplayCurrency(e.target.value);
  }
  render () {
    let { rates, data, base, currency, getConversionInfo } = this.props;

    if (rates.length === 0) { getConversionInfo(base) }

    let scaled = data.map((point) => {
      return {...point, amount: point.amount * rates[currency]};
    });

    return (
      <div className="financial-display">
        <DisplayGraph data={scaled} />
        <p>Display in:
          <select value={currency} onChange={this.handleCurrencyChange}>
            {
              rates.length === 0 ? null : Object.keys(rates).map((name, i) => (
                <option key={i}>{name}</option>
              ))
            }
          </select>
        </p>
      </div>
    )
  }
}

Projection.propTypes = {
	getConversionInfo: PropTypes.func.isRequired,
  setDisplayCurrency: PropTypes.func.isRequired
}
export default Projection;
