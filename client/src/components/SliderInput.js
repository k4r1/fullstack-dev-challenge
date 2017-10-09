import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SliderInput.css'

export default class SliderInput extends Component {

	constructor(props) {
		super(props)

		this.state = {
			value: props.defaultValue
		}
	}

	handleChange(e) {
		const value = e.target.value
		this.setState({value})
		this.props.onChange(Number(value))
	}

	render() {
		const { value } = this.state

		return (
			<div className="fmz-slider">
				<p>{value}{this.props.unit}</p>
				<input type="range"
					value={value}
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					onChange={this.handleChange.bind(this)}/>
			</div>
		)
	}
}

SliderInput.propTypes = {
	defaultValue: PropTypes.number,
	onChange: PropTypes.func.isRequired
}
