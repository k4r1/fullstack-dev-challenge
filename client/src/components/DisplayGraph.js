import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VictoryLine, VictoryChart } from 'victory'

export default class DisplayGraph extends Component {

	render() {
		const { data } = this.props;

		const theme = {
			axis: {
				style: {
					grid: {
						fill: "transparent",
						stroke: "transparent"
					},
					ticks: {
						fill: "transparent",
						stroke: "transparent"
					},
					tickLabels: {
						fontSize: 10,
						padding: 5
					}
				}
			},
			line: {
    		style: {
      		data: {
        		fill: "transparent",
        		stroke: "#00b2ff",
        		strokeWidth: 2
      		}
    		}
  		}
		};

		return (
			<div>
				<VictoryChart animate={{duration: 100}} theme={theme} padding={{ top: 10, left: 50, bottom: 20, right: 50}}>
					<VictoryLine {...{data}} y="amount"/>
				</VictoryChart>
			</div>
		);
	}
}

DisplayGraph.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object)
};
