import React, { Component } from 'react'
import './Parameters.css'

import CurrencyInput from './CurrencyInput'
import SliderInput from './SliderInput'

class Parameters extends Component {
  render () {
    console.log(this.props);
    return (
      <div className="financial-inputs">
        <p className="input-label">How much have you saved?</p>
        <CurrencyInput defaultValue={0}/>

        <p className="input-label">How much will you save each month?</p>
        <CurrencyInput defaultValue={0}/>

        <p className="input-label">How much interest will you earn per year?</p>
        <SliderInput defaultValue={4}/>
      </div>
    )
  }
}

export default Parameters;
