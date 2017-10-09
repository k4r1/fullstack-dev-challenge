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

    if (Object.keys(rates).length === 1) { getConversionInfo(base) }

    let scaled = data.map((point) => {
      return {...point, amount: point.amount * rates[currency]};
    });

    return (
      <div className="financial-display">
        <h2>📈 Projection</h2>
        <p>Projection for the next 50 years (600 months)</p>
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
