import React, { Component } from 'react'
import './Projection.css'

import DisplayGraph from './DisplayGraph'

class Projection extends Component {
  render () {
    return (
      <div className="financial-display">
        {/*We have included some sample data here, you will need to replace this
        with your own. Feel free to change the data structure if you wish.*/}
        <DisplayGraph data={this.props.data}/>
      </div>
    )
  }
}

export default Projection;
